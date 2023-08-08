import React, { useEffect, useRef } from "react";
import moment from "moment";

export default function MessageList({
  conversation,
  messages,
  currentMessage,
  onEdit,
  onSubmit,
  onDelete,
}) {
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const messageElements = messages.map((message) => (
    <div
      key={message.id}
      className={`message-container ${
        message.sender === conversation.freelancer_id ? "sender" : "receiver"
      }`}
    >
      <div className="message-content">
        <p>{message.content}</p>
        <span className="message-time">
          {moment(message.updated_at).format("M/D/YY h:mm a")}
        </span>
      </div>
    </div>
  ));

  return (
    <div className="message-list">
      {messageElements}
      <div ref={lastMessageRef} />
      <div className="message-input">
        <textarea
          value={currentMessage}
          onChange={(e) => onEdit(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={onSubmit}>Send</button>
      </div>
    </div>
  );
}
