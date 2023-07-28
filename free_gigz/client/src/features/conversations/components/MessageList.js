import React, { useEffect } from "react";
import { useRef } from "react";
import { useUser } from "../../../components/App";
import { useSystemMode } from "../../../SystemModeContext";
import moment from "moment";

export default function MessageList({
  conversation,
  messages,
  currentMessage,
  onSubmit,
  onEdit,
}) {
  const user = useUser();
  const systemMode = useSystemMode();
  const lastMessageRef = useRef();
  const newMessageInputRef = useRef();

  function scrollToBottom() {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  scrollToBottom();

  if (Object.keys(conversation).length === 0) {
    return (
      <div
        class="d-flex col-md-7 col-xl-6 bg-white border rounded border-grey align-items-center"
        style={{ height: "70vh" }}
      >
        <div class="text-center w-100 containter-fluid">
          <h4>
            Please Select a Conversation Before Continuing
          </h4>
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
        <div class="d-flex justify-content-end mb-4 text-end">
          <div class="msg_cotainer">
            <p
              class={`medium p-2 me-1 rounded-4 colors-${systemMode.toLowerCase()} text-white`}
            >
              {message.body}
            </p>
            <span class="msg_time">
              {moment(message.updated_at).format("M/D/YY h:mm a")}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div class="message-container d-flex justify-content-start mb-4">
          <div class="msg_cotainer">
            <p class="fw-bold">{message.sender}</p>
            <p class="medium p-2 me-1 rounded-4 colors-grey text-black">
              {message.body}
            </p>
            <span class="small mt-0 fst-italic text-muted msg_time">
              {moment(message.updated_at).format("M/D/YY h:mm a")}
            </span>
          </div>
        </div>
      );
    }
  });

  return (
    <div id="message-list-div" class="col-md-8 col-xl-6 chat">
      <div class="card">
        <div
          class={`card-header colors-${systemMode.toLowerCase()} text-white font-weight-bold`}
        >
          <div class="d-flex">
            <div id="selected-conversation-information">
              <span class="fs-1 fw-bold w-100 text-right">
                Chat with {conversationUsers.join(", ")}
              </span>
              <p class="fst-italic">{messages.length} Messages</p>
            </div>
          </div>
        </div>
        <div
          class="card-body msg_card_body"
          style={{ height: "45vh", overflowY: "auto" }}
        >
          {messageElements}
          <div ref={lastMessageRef} />
        </div>
        <div class="card-footer">
          <div name="message-input-box-actions" class="input-group mb-3">
            <textarea
              name="message-input-box"
              class="form-control type_msg"
              rows="3"
              style={{ resize: "none" }}
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => onEdit(e.target.value)}
              ref={newMessageInputRef}
            />
            <button
              class={`btn colors-${systemMode.toLowerCase()} inverse-button-colors-${systemMode.toLowerCase()} fw-bold`}
              type="button"
              id="button-addon1"
              onClick={() => onSubmit(newMessageInputRef.current.value)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
