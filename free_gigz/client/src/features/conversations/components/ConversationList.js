import React, { useRef, useState } from "react";
import { useUser } from "../../../components/App";
import { useSystemMode } from "../../../SystemModeContext";
import { BsPencilSquare } from "react-icons/bs";
import useUsers from "../../../utils/useUsers";

export default function ConversationList({
  currentConversation,
  conversations,
  onSearch,
  onSelect,
  onCreate,
}) {
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);

  const selectUsersRef = useRef();
  const systemMode = useSystemMode();
  const user = useUser();
  const users = useUsers();

  const conversationElements = conversations.map((conversation) => {
    const conversationUsers = conversation.users
      .filter((conversationUser) => conversationUser !== user.username)
      .join(", ");

    return (
      <li
        key={conversation.id}
        class={`list-group-item ${
          conversation.id === currentConversation.id
            ? "active-conversation"
            : ""
        }`}
        onClick={() => onSelect(conversation)}
      >
        {conversationUsers}
      </li>
    );
  });

  return (
    <div
      id="conversation-list-div"
      class="col-md-4 col-xl-3 chat"
    >
      <div
        id="conversation-list-card"
        class="card mb-sm-3 mb-md-0 contacts_card h-100"
      >
        <div class={`card-header colors-${systemMode.toLowerCase()}`}>
          <div
            class="d-flex justify-content-center text-white"
            style={{ cursor: "pointer", width: "100%" }}
            onClick={() => setShowUsersDropdown(!showUsersDropdown)}
          >
            <p class="m-1 fs-6">New Conversation</p>
            <BsPencilSquare style={{ color: "white" }} size={25} />
          </div>
          {showUsersDropdown ? (
            <div
              class="d-flex justify-content-center mb-4"
              style={{ width: "100%" }}
            >
              <select
                ref={selectUsersRef}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Select a User</option>
                {users
                  .filter(
                    (selectedUser) => selectedUser.username !== user.username
                  )
                  .map((user) => {
                    return (
                      <option value={user.username}>{user.username}</option>
                    );
                  })}
              </select>
              <button
                type="button"
                class="btn btn-secondary h-1"
                onClick={() => {
                  setShowUsersDropdown(false);
                  onCreate(selectUsersRef.current.value);
                }}
              >
                Create
              </button>
            </div>
          ) : null}
          <div class="form-floating m-0 form-control-sm">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Type your search here..."
              style={{ height: "43px" }}
              onChange={(e) => onSearch(e.target.value)}
            />
            <label
              for="floatingInput"
              className={`text-colors-${systemMode.toLowerCase()}`}
            >
              Search
            </label>
          </div>
        </div>
        <div class="card-body" style={{ height: "55vh" }}>
          <ul class="list-group list-group-flush">{conversationElements}</ul>
        </div>
      </div>
    </div>
  );
}
