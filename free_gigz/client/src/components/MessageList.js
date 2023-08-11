
import React, { useEffect, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import moment from "moment";

export default function MessageList({
  conversation,
  messages,
  currentMessage,
  onSubmit,
  onEdit,
}) {
  const { user } = useContext(AuthContext);
  const lastMessageRef = useRef();
  const newMessageInputRef = useRef();

  function scrollToBottom() {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!conversation || !Array.isArray(conversation.users)) {
    return (
      <div className="d-flex col-md-7 col-xl-6 bg-white border rounded border-grey align-items-center" style={{ height: "70vh" }}>
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
        <div className="d-flex justify-content-end mb-4 text-end" key={message.id}>
          <div className="msg_cotainer">
            <p className={`medium p-2 me-1 rounded-4 colors text-white`}>
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
        <div className="message-container d-flex justify-content-start mb-4" key={message.id}>
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
// }
//       </div>
//     </div>
//   );
// }



  }
