// import React, { useEffect, useRef } from "react";
// import moment from "moment";

// export default function MessageList({
//   conversation,
//   messages,
//   currentMessage,
//   onEdit,
//   onSubmit,
//   onDelete,
// }) {
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const messageElements = messages.map((message) => (
//     <div
//       key={message.id}
//       className={`message-container ${
//         message.sender === conversation.freelancer_id ? "sender" : "receiver"
//       }`}
//     >
//       <div className="message-content">
//         <p>{message.content}</p>
//         <span className="message-time">
//           {moment(message.updated_at).format("M/D/YY h:mm a")}
//         </span>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="message-list">
//       {messageElements}
//       <div ref={lastMessageRef} />
//       <div className="message-input">
//         <textarea
//           value={currentMessage}
//           onChange={(e) => onEdit(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={onSubmit}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useRef } from "react";
// import moment from "moment";

// export default function MessageList({
//   conversation,
//   messages,
//   currentMessage,
//   onEdit,
//   onSubmit,
// }) {
//   const lastMessageRef = useRef();

//   useEffect(() => {
//     lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const messageElements = messages.map((message) => {
//     const isSender = message.sender === conversation.freelancer_id;
    
//     return (
//       <div
//         key={message.id}
//         className={`message-container ${
//           isSender ? "sender" : "receiver"
//         }`}
//       >
//         <div className={`message-content ${isSender ? "sender" : "receiver"}`}>
//           {!isSender && (
//             <p className="fw-bold">{message.sender}</p>
//           )}
//           <p>{message.content}</p>
//           <span className="message-time">
//             {moment(message.updated_at).format("M/D/YY h:mm a")}
//           </span>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="message-list">
//       {messageElements}
//       <div ref={lastMessageRef} />
//       <div className="message-input">
//         <textarea
//           value={currentMessage}
//           onChange={(e) => onEdit(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={() => onSubmit(currentMessage)}>Send</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

export default function MessageList({
  conversation,
  messages,
  currentMessage,
  onEdit,
  onSubmit,
}) {
  const [messageInput, setMessageInput] = useState("");

  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim() === "") return;
    
    onSubmit(messageInput);
    setMessageInput("");
  };

  const messageElements = messages.map((message) => {
    const isSender = message.sender === conversation.freelancer_id;

    return (
      <div
        key={message.id}
        className={`message-container ${
          isSender ? "sender" : "receiver"
        }`}
      >
        <div className={`message-content ${isSender ? "sender" : "receiver"}`}>
          {!isSender && <p className="fw-bold">{message.sender}</p>}
          <p>{message.content}</p>
          <span className="message-time">
            {moment(message.updated_at).format("M/D/YY h:mm a")}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="message-list">
      {messageElements}
      <div ref={lastMessageRef} />
      <div className="message-input">
        <form onSubmit={handleSendMessage}>
          <textarea
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
