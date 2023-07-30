import React, { useEffect, useState } from "react";
import { useUser } from "../../components/App";
import toast, { Toaster } from "react-hot-toast";
import ConversationList from "./components/ConversationList";
import MessageList from "./components/MessageList"

export default function ConversationsIndex() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [conversationSearch, setConversationSearch] = useState("");
  const [fetchMethod, setFetchMethod] = useState("POST");

  const user = useUser();

  const failureNotify = () =>
    toast.error("Message Not Sent! Please include a message before sending.");

  useEffect(() => {
    fetch("/conversations").then((r) => {
      if (r.ok) {
        r.json().then((conversations) => {
          setConversations(conversations);
          setCurrentMessages(conversations.messages);
        });
      }
    });
  }, []);

  function handleSelectConversation(conversation) {
    setCurrentConversation(conversation);
    setCurrentMessages(conversation.messages);
  }

  function handleConversationSearch(search) {
    setConversationSearch(search);
  }

  function handleEditMessage(editedMessage) {
    setCurrentMessage(editedMessage)
  }

  function handleSubmitMessage(updatedMessage) {
    setCurrentMessage("");

    let fetchPathEnding = "";

    if (fetchMethod === "PATCH") {
      fetchPathEnding = `/${currentMessage.id}`;
    }

    fetch(`/messages${fetchPathEnding}`, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        body: updatedMessage,
        sender: user.username,
        conversation_id: currentConversation.id,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          if (fetchMethod === "POST") {
            setCurrentMessages([...currentMessages, data]);
          } else if (fetchMethod === "PATCH") {
            setCurrentMessages([
              ...currentMessages.map((message) => {
                if (message.id === updatedMessage.id) {
                  return updatedMessage;
                }
                return message;
              }),
            ]);
          }
        });
      } else {
        failureNotify();
      }
    });
  }

  function handleDeleteMessage(deletedMessage) {
    fetch(`/postings/${deletedMessage.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setCurrentMessages(
          currentMessages.filter((message) => message.id !== deletedMessage.id)
        );
      }
    });
  }

  function handleCreateConversation(newUsername) {
    let successfulRun = false;
    
    for (let i = 0; i < conversations.length - 1; i++) {
      if (conversations[i].users.sort().join(",") == [user.username, newUsername].sort().join(",")) {
        handleSelectConversation(conversations[i])
        successfulRun = true;
        break
      }
    }

    if (!successfulRun) {
      fetch("/conversations", {
        method: "POST",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({
          users: [user.username, newUsername],
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((newConversation) => {
            setCurrentConversation(newConversation);
            setConversations([...conversations, newConversation]);
            setCurrentMessage("");
            setCurrentMessages([]);
          });
        }
      });
    } 
    
  }

  const filteredConversations = conversations.filter((conversation) =>
    conversation.users.join(",").includes(conversationSearch)
  );

  return (
    <>
      <h1 class="page-header">Your Conversations</h1>
      <Toaster />
      <div class="container-fluid">
        <div
          id="conversation-page-parent-div"
          class="row my-4 justify-content-center h-100"
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
