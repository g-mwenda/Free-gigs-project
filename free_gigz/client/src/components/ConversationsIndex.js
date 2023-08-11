
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ConversationList from "./ConversationList";
import MessageList from "./MessageList";

export default function ConversationsIndex() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [conversationSearch, setConversationSearch] = useState("");

  const { user, users } = useContext(AuthContext); // Access 'user' and 'users' from AuthContext

  const failureNotify = () =>
    toast.error("Message Not Sent! Please include a message before sending.");

  useEffect(() => {
    fetch("/conversations")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((conversations) => {
        setConversations(conversations);
        setCurrentMessages(conversations.messages);
      })
      .catch((error) => {
        console.error("Error fetching conversations:", error);
      });
  }, []);

  const filteredConversations = conversations.filter((conversation) =>
  Array.isArray(conversation.users) &&
  conversation.users.some((user) => user.includes(conversationSearch))
);




  const handleConversationSearch = (search) => {
    setConversationSearch(search);
  };

  const handleSelectConversation = (conversation) => {
    setCurrentConversation(conversation);
    setCurrentMessages(conversation.messages);
  };

  const handleCreateConversation = (newUsername) => {
    const conversationUsers = [user.username, newUsername];
    const existingConversation = conversations.find(
      (conversation) =>
        conversation.users.sort().join(",") === conversationUsers.sort().join(",")
    );

    if (existingConversation) {
      handleSelectConversation(existingConversation);
    } else {
      fetch("/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: conversationUsers,
        }),
      })
        .then((response) => response.json())
        .then((newConversation) => {
          setCurrentConversation(newConversation);
          setConversations([...conversations, newConversation]);
          setCurrentMessage("");
          setCurrentMessages([]);
        })
        .catch((error) => {
          console.error("Error creating conversation:", error);
        });
    }
  };

  const handleSubmitMessage = (message) => {
    if (!message.trim()) {
      failureNotify();
      return;
    }

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: message,
        sender: user.username,
        conversation_id: currentConversation.id,
      }),
    })
      .then((response) => response.json())
      .then((newMessage) => {
        setCurrentMessages([...currentMessages, newMessage]);
        setCurrentMessage("");
      })
      .catch((error) => {
        console.error("Error submitting message:", error);
      });
  };

  const handleEditMessage = (editedMessage) => {
    setCurrentMessage(editedMessage);
  };

  return (
    <>
      <h1 className="page-header">Your Conversations</h1>
      <Toaster />
      <div className="container-fluid">
        <div
          id="conversation-page-parent-div"
          className="row my-4 justify-content-center h-100"
        >
          <ConversationList
            currentConversation={currentConversation}
            conversations={filteredConversations}
            onSearch={handleConversationSearch}
            onSelect={handleSelectConversation}
            onCreate={handleCreateConversation}
          />
          <MessageList
            conversation={currentConversation}
            messages={currentMessages}
            currentMessage={currentMessage}
            onSubmit={handleSubmitMessage}
            onEdit={handleEditMessage}
          />
        </div>
      </div>
    </>
  );
}
