// import React, { useState, useEffect, useRef } from "react";
// // import moment from "moment";


// export default function MessageList({ conversation }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const messageInputRef = useRef();

//   useEffect(() => {
//     // Fetch messages for the selected conversation from the server
//     fetch(`/conversations/${conversation.id}/messages`)
//       .then((response) => response.json())
//       .then((data) => setMessages(data))
//       .catch((error) => console.error("Error fetching messages:", error));
//   }, [conversation]);

//   useEffect(() => {
//     messageInputRef.current.focus();
//   }, []);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     // Send newMessage to the server
//     fetch(`/conversations/${conversation.id}/messages`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content: newMessage }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setMessages([...messages, data]);
//         setNewMessage("");
//       })
//       .catch((error) => console.error("Error sending message:", error));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div>
//       {/* <h2>Conversation with User {conversation.user_id}</h2> */}
//       <div>
//         {messages.map((message) => (
//           <div key={message.id}>
//             <p>{message.content}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           ref={messageInputRef}
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// // ERROR
// // Cannot read properties of undefined (reading 'id')
// // TypeError: Cannot read properties of undefined (reading 'id')
// //     at http://localhost:4002/static/js/bundle.js:4815:42
// //     at commitHookEffectListMount (http://localhost:4002/static/js/bundle.js:44043:30)
// //     at commitPassiveMountOnFiber (http://localhost:4002/static/js/bundle.js:45536:17)
// //     at commitPassiveMountEffects_complete (http://localhost:4002/static/js/bundle.js:45508:13)
// //     at commitPassiveMountEffects_begin (http://localhost:4002/static/js/bundle.js:45498:11)
// //     at commitPassiveMountEffects (http://localhost:4002/static/js/bundle.js:45488:7)
// //     at flushPassiveEffectsImpl (http://localhost:4002/static/js/bundle.js:47373:7)
// //     at flushPassiveEffects (http://localhost:4002/static/js/bundle.js:47325:18)
// //     at http://localhost:4002/static/js/bundle.js:47140:13
// //     at workLoop (http://localhost:4002/static/js/bundle.js:109201:38)

import React, { useEffect, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext"; // Update the import path
import moment from "moment";

export default function MessageList({
  conversation,
  messages,
  currentMessage,
  onSubmit,
  onEdit,
}) {
  const { user } = useContext(AuthContext); // Use AuthContext to get user
  const lastMessageRef = useRef();
  const newMessageInputRef = useRef();

  function scrollToBottom() {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (Object.keys(conversation).length === 0) {
    return (
      <div
        className="d-flex col-md-7 col-xl-6 bg-white border rounded border-grey align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="text-center w-100 container-fluid">
          <h4>Please Select a Conversation Before Continuing</h4>
        </div>
      </div>
    );
  }

  const conversationUsers = conversation.users.filter(
    (selectedUser) => selectedUser !== user.username
  );

  const messageElements = messages.map((message) => {
    if (message.sender === user.username) {
      return (
        <div className="d-flex justify-content-end mb-4 text-end">
          <div className="msg_cotainer">
            <p
              className={`medium p-2 me-1 rounded-4 colors text-white`}
            >
              {message.body}
            </p>
            <span className="msg_time">
              {moment(message.updated_at).format("M/D/YY h:mm a")}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="message-container d-flex justify-content-start mb-4">
          <div className="msg_cotainer">
            <p className="fw-bold">{message.sender}</p>
            <p className="medium p-2 me-1 rounded-4 colors-grey text-black">
              {message.body}
            </p>
            <span className="small mt-0 fst-italic text-muted msg_time">
              {moment(message.updated_at).format("M/D/YY h:mm a")}
            </span>
          </div>
        </div>
      );
    }
  });

  return (
    <div id="message-list-div" className="col-md-8 col-xl-6 chat">
      <div className="card">
        <div
          className={`card-header colors text-white font-weight-bold`}
        >
          <div className="d-flex">
            <div id="selected-conversation-information">
              <span className="fs-1 fw-bold w-100 text-right">
                Chat with {conversationUsers.join(", ")}
              </span>
              <p className="fst-italic">{messages.length} Messages</p>
            </div>
          </div>
        </div>
        <div
          className="card-body msg_card_body"
          style={{ height: "45vh", overflowY: "auto" }}
        >
          {messageElements}
          <div ref={lastMessageRef} />
        </div>
        <div className="card-footer">
          <div
            name="message-input-box-actions"
            className="input-group mb-3"
          >
            <textarea
              name="message-input-box"
              className="form-control type_msg"
              rows="3"
              style={{ resize: "none" }}
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => onEdit(e.target.value)}
              ref={newMessageInputRef}
            />
            <button
              className={`btn colors inverse-button-colors fw-bold`}
              type="button"
              id="button-addon1"
              onClick={() =>
                onSubmit(newMessageInputRef.current.value)
              }
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
