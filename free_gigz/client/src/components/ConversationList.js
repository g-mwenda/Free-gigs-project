
// fetches all users, has error with component display
import React, { useRef, useState, useContext, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";

export default function ConversationList({
  currentConversation,
  conversations,
  onSearch,
  onSelect,
  onCreate,
}) {
  const [showUsersDropdown, setShowUsersDropdown] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const selectUsersRef = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(data => {
        setAllUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching all users:', error);
        setLoading(false);
      });
  }, []);

  // conversations test- Tom
  useEffect(() => {
    fetch('/conversations')
      .then(response => response.json())
      .then(data => {
        setAllUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching all users:', error);
        setLoading(false);
      });
  }, []);

  const handleCreateConversation = (selectedUsername) => {
    const selectedUser = allUsers.find(user => user.username === selectedUsername);

    if (selectedUser) {
      const newConversation = {
        users: [user.username, selectedUsername],
        messages: [],
      };

      const updatedConversations = [...conversations, newConversation];
      onCreate(updatedConversations);
      onSelect(newConversation);
    } else {
      console.error(`Selected user '${selectedUsername}' not found.`);
    }
  };

  const conversationElements = conversations.map((conversation, index) => {
    const conversationUsers = conversation.users
      .filter((conversationUser) => conversationUser !== user.username)
      .join(", ");

    return (
      <li
        key={index} // Use the index as the key for now
        className={`list-group-item ${
          conversation === currentConversation
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
<div id="conversation-list-div" className="col-md-4 col-xl-3 chat">
<div
  id="conversation-list-card"
  className="card mb-sm-3 mb-md-0 contacts_card h-100"
>
  <div className={`card-header colors`}>
    <div
      className="d-flex justify-content-center text-black"
      style={{ cursor: "pointer", width: "100%" }}
      onClick={() => setShowUsersDropdown(!showUsersDropdown)}
    >
      <p className="m-1 fs-6">New Conversation</p>
      <BsPencilSquare style={{ color: "black" }} size={25} />
    </div>
    {loading ? (
      <p>Loading users...</p>
    ) : (
      <div className="d-flex justify-content-center mb-4" style={{ width: "100%" }}>
        <select
          ref={selectUsersRef}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select a User</option>
          {allUsers
            .filter((selectedUser) => selectedUser.username && selectedUser.username !== (user && user.username))
            .map((user) => (
              <option key={user.id} value={user.username}>
                {user.username}
              </option>
            ))}
        </select>
        <button
          type="button"
          className="btn btn-secondary h-1"
          disabled={!selectUsersRef.current?.value || !user?.username} // Add null checks using optional chaining
          onClick={() => {
            setShowUsersDropdown(false);
            onCreate(selectUsersRef.current?.value);
          }}
        >
          Create
        </button>
      </div>
    )}


          <div className="form-floating m-0 form-control-sm">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Type your search here..."
              style={{ height: "43px" }}
              onChange={(e) => onSearch(e.target.value)}
            />
            <label
              htmlFor="floatingInput"
              // className={`text-colors-${systemMode.toLowerCase()}`}
            >
              Search
            </label>
          </div>
        </div>
        <div className="card-body" style={{ height: "55vh" }}>
          <ul className="list-group list-group-flush">{conversationElements}</ul>
        </div>
      </div>
    </div>
  );
}
