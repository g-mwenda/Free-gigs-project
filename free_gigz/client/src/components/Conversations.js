
// import React, { useEffect, useState } from "react";
// import { BsPencilSquare } from "react-icons/bs";

// export default function ConversationList({
//   currentConversation,
//   onSelectConversation,
//   onCreateConversation,
//   onSearch,
// }) {
//   const [conversations, setConversations] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   useEffect(() => {
//     // Fetch conversations data here
//     fetch("/conversations")
//       .then((response) => response.json())
//       .then((data) => setConversations(data))
//       .catch((error) => console.error("Error fetching conversations:", error));

//     // Fetch users from the clients table
//     fetch("/clients")
//       .then((response) => response.json())
//       .then((data) => {
//         const clientUsers = data.map((client) => ({
//           id: client.id,
//           username: client.company_name,
//         }));
//         setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
//       })
//       .catch((error) => console.error("Error fetching clients:", error));

//     // Fetch users from the freelancers table
//     fetch("/freelancers")
//       .then((response) => response.json())
//       .then((data) => {
//         const freelancerUsers = data.map((freelancer) => ({
//           id: freelancer.id,
//           username: freelancer.name,
//         }));
//         setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
//       })
//       .catch((error) => console.error("Error fetching freelancers:", error));
//   }, []);

//   const conversationElements = conversations.map((conversation) => (
//     <div
//       key={conversation.id}
//       className={`conversation ${
//         conversation.id === currentConversation.id ? "active" : ""
//       }`}
//       onClick={() => onSelectConversation(conversation)}
//     >
//       <p>{conversation.freelancer_id}</p>
//     </div>
//   ));

//   const userOptions = allUsers.map((user) => (
//     <option key={user.id} value={user.username}>
//       {user.username}
//     </option>
//   ));

//   return (
//     <div className="conversation-list">
//       <div className="new-conversation">
//         <div className="toggle-new-conversation">
//           <p>New Conversation</p>
//           <BsPencilSquare size={25} />
//         </div>
//         <div className="new-conversation-dropdown">
//           {/* Dropdown content */}
//           <select
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//           >
//             <option value="">Select a User</option>
//             {userOptions}
//           </select>
//           <button onClick={() => onCreateConversation(selectedUser)}>Create</button>
//         </div>
//       </div>
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search..."
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </div>
//       <div className="conversations">{conversationElements}</div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { BsPencilSquare } from "react-icons/bs";

// export default function ConversationList({
//   currentConversation,
//   onSelectConversation,
//   onCreateConversation,
//   onSearch,
// }) {
//   const [conversations, setConversations] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");

//   useEffect(() => {
//     // Fetch conversations data here
//     fetch("/conversations")
//       .then((response) => response.json())
//       .then((data) => setConversations(data))
//       .catch((error) => console.error("Error fetching conversations:", error));

//     // Fetch users from the clients table
//     fetch("/clients")
//       .then((response) => response.json())
//       .then((data) => {
//         const clientUsers = data.map((client) => ({
//           id: client.id,
//           username: client.company_name,
//         }));
//         setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
//       })
//       .catch((error) => console.error("Error fetching clients:", error));

//     // Fetch users from the freelancers table
//     fetch("/freelancers")
//       .then((response) => response.json())
//       .then((data) => {
//         const freelancerUsers = data.map((freelancer) => ({
//           id: freelancer.id,
//           username: freelancer.name,
//         }));
//         setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
//       })
//       .catch((error) => console.error("Error fetching freelancers:", error));
//   }, []);

//   const conversationElements = conversations.map((conversation) => (
//     <div
//       key={conversation.id}
//       className={`conversation ${
//         conversation.id === currentConversation.id ? "active" : ""
//       }`}
//       onClick={() => onSelectConversation(conversation)}
//     >
//       <p>{conversation.freelancer_id}</p>
//     </div>
//   ));

//   const userOptions = allUsers.map((user) => (
//     <option key={user.id} value={user.username}>
//       {user.username}
//     </option>
//   ));

//   const handleCreateConversation = () => {
//     // Implement your logic for creating a new conversation here
//     // Use the selectedUser state value to create the conversation
//     // You can call the onCreateConversation function with the selectedUser value
//     onCreateConversation(selectedUser);
//   };

//   return (
//     <div className="conversation-list">
//       <div className="new-conversation">
//         <div className="toggle-new-conversation">
//           <p>New Conversation</p>
//           <BsPencilSquare size={25} />
//         </div>
//         <div className="new-conversation-dropdown">
//           {/* Dropdown content */}
//           <select
//             value={selectedUser}
//             onChange={(e) => setSelectedUser(e.target.value)}
//           >
//             <option value="">Select a User</option>
//             {userOptions}
//           </select>
//           <button onClick={handleCreateConversation}>Create</button>
//         </div>
//       </div>
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search..."
//           onChange={(e) => onSearch(e.target.value)}
//         />
//       </div>
//       <div className="conversations">{conversationElements}</div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";

export default function ConversationList({
  currentConversation,
  onSelectConversation,
  onCreateConversation,
  onSearch,
}) {
  const [conversations, setConversations] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [newConversationData, setNewConversationData] = useState({
    freelancer_id: 0,
    client_id: 0,
  });

  useEffect(() => {
    // Fetch conversations data here
    fetch("/conversations")
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((error) => console.error("Error fetching conversations:", error));

    // Fetch users from the clients table
    fetch("/clients")
      .then((response) => response.json())
      .then((data) => {
        const clientUsers = data.map((client) => ({
          id: client.id,
          username: client.company_name,
        }));
        setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
      })
      .catch((error) => console.error("Error fetching clients:", error));

    // Fetch users from the freelancers table
    fetch("/freelancers")
      .then((response) => response.json())
      .then((data) => {
        const freelancerUsers = data.map((freelancer) => ({
          id: freelancer.id,
          username: freelancer.name,
        }));
        setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
      })
      .catch((error) => console.error("Error fetching freelancers:", error));
  }, []);

  const conversationElements = conversations.map((conversation) => (
    <div
      key={conversation.id}
      className={`conversation ${
        conversation.id === currentConversation.id ? "active" : ""
      }`}
      onClick={() => onSelectConversation(conversation)}
    >
      <p>{conversation.freelancer_id}</p>
    </div>
  ));

  const userOptions = allUsers.map((user) => (
    <option key={user.id} value={user.id}>
      {user.username}
    </option>
  ));

  const handleCreateConversation = () => {
    // Form validation and data processing
    const { freelancer_id, client_id } = newConversationData;
    if (!freelancer_id || !client_id) {
      // Handle form validation error
      return;
    }

    // Create a new conversation
    const newConversation = {
      id: conversations.length + 1,
      freelancer_id,
      client_id,
      // ... other conversation data
    };

    // Update state with the new conversation
    setConversations([...conversations, newConversation]);
    setSelectedUser("");
    setNewConversationData({ freelancer_id: 0, client_id: 0 });
  };

  return (
    <div className="conversation-list">
      <div className="new-conversation">
        <div className="toggle-new-conversation">
          <p>New Conversation</p>
          <BsPencilSquare size={25} />
        </div>
        <div className="new-conversation-dropdown">
          {/* Dropdown content */}
          <select
            value={selectedUser}
            onChange={(e) => {
              setSelectedUser(e.target.value);
              setNewConversationData({
                ...newConversationData,
                [e.target.name]: parseInt(e.target.value),
              });
            }}
            name="client_id"
          >
            <option value="">Select a User</option>
            {userOptions}
          </select>
          <button onClick={handleCreateConversation}>Create</button>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="conversations">{conversationElements}</div>
    </div>
  );
}

