import React, { useState, useEffect, useRef } from "react";
// import moment from "moment";


export default function MessageList({ conversation }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messageInputRef = useRef();

  useEffect(() => {
    // Fetch messages for the selected conversation from the server
    fetch(`/conversations/${conversation.id}/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, [conversation]);

  useEffect(() => {
    messageInputRef.current.focus();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Send newMessage to the server
    fetch(`/conversations/${conversation.id}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([...messages, data]);
        setNewMessage("");
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      {/* <h2>Conversation with User {conversation.user_id}</h2> */}
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          ref={messageInputRef}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

// ERROR
// Cannot read properties of undefined (reading 'id')
// TypeError: Cannot read properties of undefined (reading 'id')
//     at http://localhost:4002/static/js/bundle.js:4815:42
//     at commitHookEffectListMount (http://localhost:4002/static/js/bundle.js:44043:30)
//     at commitPassiveMountOnFiber (http://localhost:4002/static/js/bundle.js:45536:17)
//     at commitPassiveMountEffects_complete (http://localhost:4002/static/js/bundle.js:45508:13)
//     at commitPassiveMountEffects_begin (http://localhost:4002/static/js/bundle.js:45498:11)
//     at commitPassiveMountEffects (http://localhost:4002/static/js/bundle.js:45488:7)
//     at flushPassiveEffectsImpl (http://localhost:4002/static/js/bundle.js:47373:7)
//     at flushPassiveEffects (http://localhost:4002/static/js/bundle.js:47325:18)
//     at http://localhost:4002/static/js/bundle.js:47140:13
//     at workLoop (http://localhost:4002/static/js/bundle.js:109201:38)
