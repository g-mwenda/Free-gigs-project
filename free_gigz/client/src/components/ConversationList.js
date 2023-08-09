
// // import React, { useEffect, useState } from "react";
// // import { BsPencilSquare } from "react-icons/bs";

// // export default function ConversationList({
// //   currentConversation,
// //   onSelectConversation,
// //   onCreateConversation,
// //   onSearch,
// // }) {
// //   const [conversations, setConversations] = useState([]);
// //   const [allUsers, setAllUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState("");

// //   useEffect(() => {
// //     // Fetch conversations data here
// //     fetch("/conversations")
// //       .then((response) => response.json())
// //       .then((data) => setConversations(data))
// //       .catch((error) => console.error("Error fetching conversations:", error));

// //     // Fetch users from the clients table
// //     fetch("/clients")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const clientUsers = data.map((client) => ({
// //           id: client.id,
// //           username: client.company_name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching clients:", error));

// //     // Fetch users from the freelancers table
// //     fetch("/freelancers")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const freelancerUsers = data.map((freelancer) => ({
// //           id: freelancer.id,
// //           username: freelancer.name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching freelancers:", error));
// //   }, []);

// //   const conversationElements = conversations.map((conversation) => (
// //     <div
// //       key={conversation.id}
// //       className={`conversation ${
// //         conversation.id === currentConversation.id ? "active" : ""
// //       }`}
// //       onClick={() => onSelectConversation(conversation)}
// //     >
// //       <p>{conversation.freelancer_id}</p>
// //     </div>
// //   ));

// //   const userOptions = allUsers.map((user) => (
// //     <option key={user.id} value={user.username}>
// //       {user.username}
// //     </option>
// //   ));

// //   return (
// //     <div className="conversation-list">
// //       <div className="new-conversation">
// //         <div className="toggle-new-conversation">
// //           <p>New Conversation</p>
// //           <BsPencilSquare size={25} />
// //         </div>
// //         <div className="new-conversation-dropdown">
// //           {/* Dropdown content */}
// //           <select
// //             value={selectedUser}
// //             onChange={(e) => setSelectedUser(e.target.value)}
// //           >
// //             <option value="">Select a User</option>
// //             {userOptions}
// //           </select>
// //           <button onClick={() => onCreateConversation(selectedUser)}>Create</button>
// //         </div>
// //       </div>
// //       <div className="search">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           onChange={(e) => onSearch(e.target.value)}
// //         />
// //       </div>
// //       <div className="conversations">{conversationElements}</div>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import { BsPencilSquare } from "react-icons/bs";

// // export default function ConversationList({
// //   currentConversation,
// //   onSelectConversation,
// //   onCreateConversation,
// //   onSearch,
// // }) {
// //   const [conversations, setConversations] = useState([]);
// //   const [allUsers, setAllUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState("");

// //   useEffect(() => {
// //     // Fetch conversations data here
// //     fetch("/conversations")
// //       .then((response) => response.json())
// //       .then((data) => setConversations(data))
// //       .catch((error) => console.error("Error fetching conversations:", error));

// //     // Fetch users from the clients table
// //     fetch("/clients")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const clientUsers = data.map((client) => ({
// //           id: client.id,
// //           username: client.company_name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching clients:", error));

// //     // Fetch users from the freelancers table
// //     fetch("/freelancers")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const freelancerUsers = data.map((freelancer) => ({
// //           id: freelancer.id,
// //           username: freelancer.name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching freelancers:", error));
// //   }, []);

// //   const conversationElements = conversations.map((conversation) => (
// //     <div
// //       key={conversation.id}
// //       className={`conversation ${
// //         conversation.id === currentConversation.id ? "active" : ""
// //       }`}
// //       onClick={() => onSelectConversation(conversation)}
// //     >
// //       <p>{conversation.freelancer_id}</p>
// //     </div>
// //   ));

// //   const userOptions = allUsers.map((user) => (
// //     <option key={user.id} value={user.username}>
// //       {user.username}
// //     </option>
// //   ));

// //   const handleCreateConversation = () => {
// //     // Implement your logic for creating a new conversation here
// //     // Use the selectedUser state value to create the conversation
// //     // You can call the onCreateConversation function with the selectedUser value
// //     onCreateConversation(selectedUser);
// //   };

// //   return (
// //     <div className="conversation-list">
// //       <div className="new-conversation">
// //         <div className="toggle-new-conversation">
// //           <p>New Conversation</p>
// //           <BsPencilSquare size={25} />
// //         </div>
// //         <div className="new-conversation-dropdown">
// //           {/* Dropdown content */}
// //           <select
// //             value={selectedUser}
// //             onChange={(e) => setSelectedUser(e.target.value)}
// //           >
// //             <option value="">Select a User</option>
// //             {userOptions}
// //           </select>
// //           <button onClick={handleCreateConversation}>Create</button>
// //         </div>
// //       </div>
// //       <div className="search">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           onChange={(e) => onSearch(e.target.value)}
// //         />
// //       </div>
// //       <div className="conversations">{conversationElements}</div>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import { BsPencilSquare } from "react-icons/bs";

// // export default function ConversationList({
// //   currentConversation,
// //   onSelectConversation,
// //   onCreateConversation,
// //   onSearch,
// // }) {
// //   const [conversations, setConversations] = useState([]);
// //   const [allUsers, setAllUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState("");
// //   const [newConversationData, setNewConversationData] = useState({
// //     freelancer_id: 0,
// //     client_id: 0,
// //   });

  // useEffect(() => {
  //   // Fetch conversations data here
  //   fetch("/conversations")
  //     .then((response) => response.json())
  //     .then((data) => setConversations(data))
  //     .catch((error) => console.error("Error fetching conversations:", error));

  //   // Fetch users from the clients table
  //   fetch("/clients")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const clientUsers = data.map((client) => ({
  //         id: client.id,
  //         username: client.company_name,
  //       }));
  //       setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
  //     })
  //     .catch((error) => console.error("Error fetching clients:", error));

  //   // Fetch users from the freelancers table
  //   fetch("/freelancers")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const freelancerUsers = data.map((freelancer) => ({
  //         id: freelancer.id,
  //         username: freelancer.name,
  //       }));
  //       setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
  //     })
  //     .catch((error) => console.error("Error fetching freelancers:", error));
  // }, []);

// //   const conversationElements = conversations.map((conversation) => (
// //     // <div
// //     <li
// //       key={conversation.id}
// //       className={`conversation ${
// //         conversation.id === currentConversation.id ? "active" : ""
// //       }`}
// //       onClick={() => onSelectConversation(conversation)}
// //     >
// //       <p>{conversation.freelancer_id}</p>
// //     {/* </div> */}
// //     </li>
// //   ));

// //   const userOptions = allUsers.map((user) => (
// //     <option key={user.id} value={user.id}>
// //       {user.username}
// //     </option>
// //   ));

// //   const handleCreateConversation = () => {
// //     // Form validation and data processing
// //     const { freelancer_id, client_id } = newConversationData;
// //     if (!freelancer_id || !client_id) {
// //       // Handle form validation error
// //       return;
// //     }

// //     // Create a new conversation
// //     const newConversation = {
// //       id: conversations.length + 1,
// //       freelancer_id,
// //       client_id,
// //       // ... other conversation data
// //     };

// //     // Update state with the new conversation
// //     setConversations([...conversations, newConversation]);
// //     setSelectedUser("");
// //     setNewConversationData({ freelancer_id: 0, client_id: 0 });
// //   };

// //   return (
// //     <div className="conversation-list">
// //       <div className="new-conversation">
// //         <div className="toggle-new-conversation">
// //           <p>New Conversation</p>
// //           <BsPencilSquare size={25} />
// //         </div>
// //         <div className="new-conversation-dropdown">
// //           {/* Dropdown content */}
// //           <select
// //             value={selectedUser}
// //             onChange={(e) => {
// //               setSelectedUser(e.target.value);
// //               setNewConversationData({
// //                 ...newConversationData,
// //                 [e.target.name]: parseInt(e.target.value),
// //               });
// //             }}
// //             name="client_id"
// //           >
// //             <option value="">Select a User</option>
// //             {userOptions}
// //           </select>
// //           <button onClick={handleCreateConversation}>Create</button>
// //         </div>
// //       </div>
// //       <div className="search">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           onChange={(e) => onSearch(e.target.value)}
// //         />
// //       </div>
// //       <div className="conversations">{conversationElements}</div>
// //     </div>
// //   );
// // }

// // import React, { useEffect, useState } from "react";
// // import { BsPencilSquare } from "react-icons/bs";

// // export default function ConversationList({
// //   currentConversation,
// //   onSelectConversation,
// //   onCreateConversation,
// //   onSearch,
// // }) {
// //   const [conversations, setConversations] = useState([]);
// //   const [allUsers, setAllUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState("");
// //   const [newConversationData, setNewConversationData] = useState({
// //     freelancer_id: 0,
// //     client_id: 0,
// //   });

// //   useEffect(() => {
// //     // Fetch conversations data here
// //     fetch("/conversations")
// //       .then((response) => response.json())
// //       .then((data) => setConversations(data))
// //       .catch((error) => console.error("Error fetching conversations:", error));

// //     // Fetch users from the clients table
// //     fetch("/clients")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const clientUsers = data.map((client) => ({
// //           id: client.id,
// //           username: client.company_name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...clientUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching clients:", error));

// //     // Fetch users from the freelancers table
// //     fetch("/freelancers")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const freelancerUsers = data.map((freelancer) => ({
// //           id: freelancer.id,
// //           username: freelancer.name,
// //         }));
// //         setAllUsers((prevUsers) => [...prevUsers, ...freelancerUsers]);
// //       })
// //       .catch((error) => console.error("Error fetching freelancers:", error));
// //   }, []);

// //   const conversationElements = conversations.map((conversation) => (
// //     <li
// //       key={conversation.id}
// //       className={`conversation ${
// //         conversation.id === currentConversation.id ? "active" : ""
// //       }`}
// //       onClick={() => onSelectConversation(conversation)}
// //     >
// //       <p>{conversation.freelancer_id}</p>
// //     </li>
// //   ));

// //   const userOptions = allUsers.map((user) => (
// //     <option key={user.id} value={user.id}>
// //       {user.username}
// //     </option>
// //   ));

// //   const handleCreateConversation = () => {
// //     // Form validation and data processing
// //     const { freelancer_id, client_id } = newConversationData;
// //     if (!freelancer_id || !client_id) {
// //       // Handle form validation error
// //       return;
// //     }

// //     // Create a new conversation
// //     const newConversation = {
// //       id: conversations.length + 1,
// //       freelancer_id,
// //       client_id,
// //       // ... other conversation data
// //     };

// //     // Update state with the new conversation
// //     setConversations([...conversations, newConversation]);
// //     setSelectedUser("");
// //     setNewConversationData({ freelancer_id: 0, client_id: 0 });
// //   };

// //   return (
// //     <div className="conversation-list">
// //       <div className="new-conversation">
// //         <div className="toggle-new-conversation">
// //           <p>New Conversation</p>
// //           <BsPencilSquare size={25} />
// //         </div>
// //         <div className="new-conversation-dropdown">
// //           {/* Dropdown content */}
// //           <select
// //             value={selectedUser}
// //             onChange={(e) => {
// //               setSelectedUser(e.target.value);
// //               setNewConversationData({
// //                 ...newConversationData,
// //                 [e.target.name]: parseInt(e.target.value),
// //               });
// //             }}
// //             name="client_id"
// //           >
// //             <option value="">Select a User</option>
// //             {userOptions}
// //           </select>
// //           <button onClick={handleCreateConversation}>Create</button>
// //         </div>
// //       </div>
// //       <div className="search">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           onChange={(e) => onSearch(e.target.value)}
// //         />
// //       </div>
// //       <ul className="conversations">{conversationElements}</ul>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import { BsPencilSquare } from "react-icons/bs";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";

// export default function ConversationList({
//   currentConversation,
//   onSelectConversation,
//   onSearch,
// }) {
//   const loggedInUser = useContext(AuthContext);
//   const [conversations, setConversations] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [newConversationData, setNewConversationData] = useState({
//     freelancer_id: 0,
//     client_id: 0,
//   });

//   const [clients, setClients] = useState([]);

//   // useEffect(() => {
//   //   fetch("/clients")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setClients(data);
//   //     })
//   //     .catch((error) => console.error("Error fetching clients:", error));
//   // }, []);
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
//     <li
//       key={conversation.id}
//       className={`conversation ${
//         conversation.id === currentConversation.id ? "active" : ""
//       }`}
//       onClick={() => onSelectConversation(conversation)}
//     >
//       <p>{conversation.freelancer_id}</p>
//     </li>
//   ));

//   const userOptions = allUsers.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.username}
//     </option>
//   ));

//   const handleCreateConversation = () => {
//     // Form validation and data processing
//     const { freelancer_id, client_id } = newConversationData;
//     if (!freelancer_id || !client_id) {
//       console.error("Form validation error: Missing freelancer_id or client_id");
//       return;
//     }

//     // Create a new conversation data object
//     const newConversation = {
//       freelancer_id,
//       client_id,
//     };

//     // Send POST request to create a new conversation
//     fetch("/conversations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newConversation),
//     })
//       .then((response) => response.json())
//       .then((createdConversation) => {
//         setConversations([...conversations, createdConversation]);
//         setSelectedUser(""); // Reset the dropdown value
//         setNewConversationData({ freelancer_id: 0, client_id: 0 });
//       })
//       .catch((error) =>
//         console.error("Error creating conversation:", error)
//       );
//   };

//   return (
//         <div className="conversation-list">
//           <div className="new-conversation">
//             <div className="toggle-new-conversation">
//               <p>New Conversation</p>
//               <BsPencilSquare size={25} />
//             </div>
//             <div className="new-conversation-dropdown">
//               {/* Dropdown content */}
//               <select
//                 value={selectedUser}
//                 onChange={(e) => {
//                   setSelectedUser(e.target.value);
//                   setNewConversationData({
//                     ...newConversationData,
//                     [e.target.name]: parseInt(e.target.value),
//                   });
//                 }}
//                 name="client_id"
//               >
//                 <option value="">Select a User</option>
//                 {userOptions}
//               </select>
//               <button onClick={handleCreateConversation}>Create</button>
//             </div>
//           </div>
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Search..."
//               onChange={(e) => onSearch(e.target.value)}
//             />
//           </div>
//           <ul className="conversations">{conversationElements}</ul>
//        </div>
//      );
//      }

// import React, { useState, useEffect } from "react";
// import { BsPencilSquare } from "react-icons/bs";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function ConversationList({
//   currentConversation,
//   onSelectConversation,
//   onSearch,
// }) {
//   const [conversations, setConversations] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState("");
//   const [newConversationData, setNewConversationData] = useState({
//     freelancer_id: 0,
//     client_id: 0,
//   });

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
//     <li
//       key={conversation.id}
//       className={`conversation ${
//         conversation.id === currentConversation.id ? "active" : ""
//       }`}
//       onClick={() => onSelectConversation(conversation)}
//     >
//       <p>{conversation.freelancer_id}</p>
//     </li>
//   ));

//   const userOptions = allUsers.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.username}
//     </option>
//   ));

//   const handleCreateConversation = () => {
//     // Form validation and data processing
//     const { freelancer_id, client_id } = newConversationData;
//     if (!freelancer_id || !client_id) {
//       console.error("Form validation error: Missing freelancer_id or client_id");
//       return;
//     }

//     // Create a new conversation data object
//     const newConversation = {
//       freelancer_id,
//       client_id,
//     };

//     // Send POST request to create a new conversation
//     fetch("/conversations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newConversation),
//     })
//       .then((response) => response.json())
//       .then((createdConversation) => {
//         setConversations([...conversations, createdConversation]);
//         setSelectedUser(""); // Reset the dropdown value
//         setNewConversationData({ freelancer_id: 0, client_id: 0 });
//       })
//       .catch((error) =>
//         console.error("Error creating conversation:", error)
//       );
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
//             onChange={(e) => {
//               setSelectedUser(e.target.value);
//               setNewConversationData({
//                 ...newConversationData,
//                 [e.target.name]: parseInt(e.target.value),
//               });
//             }}
//             name="client_id"
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
//       <ul className="conversations">{conversationElements}</ul>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import MessageList from "./MessageList";

// export default function ConversationList() {
//   const [conversations, setConversations] = useState([]);
//   const [selectedConversation, setSelectedConversation] = useState(null);

//   useEffect(() => {
//     // Fetch conversations from the server
//     fetch("/conversations")
//       .then((response) => response.json())
//       .then((data) => setConversations(data))
//       .catch((error) => console.error("Error fetching conversations:", error));
//   }, []);

//   const handleSelectConversation = (conversation) => {
//     setSelectedConversation(conversation);
//   };

//   return (
//     <div>
//       <ul>
//         {conversations.map((conversation) => (
//           <li key={conversation.id} onClick={() => handleSelectConversation(conversation)}>
//             Conversation with User {conversation.user_id}
//           </li>
//         ))}
//       </ul>
//       {selectedConversation && <MessageList conversation={selectedConversation} />}
//     </div>
//   );
// }
import React, { useRef, useState, useContext } from "react";
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

  const selectUsersRef = useRef();
  const { user, users } = useContext(AuthContext);

  const conversationElements = conversations.map((conversation) => {
    console.log("Conversation:", conversation);
    
    if (Array.isArray(conversation.users)) {
      const conversationUsers = conversation.users
        .filter((conversationUser) => conversationUser !== user.username)
        .join(", ");
      return (
        <li
          key={conversation.id}
          className={`list-group-item ${
            conversation.id === currentConversation.id
              ? "active-conversation"
              : ""
          }`}
          onClick={() => onSelect(conversation)}
        >
          {conversationUsers}
        </li>
      );
    } else {
      console.error("Conversation users is not an array:", conversation.users);
      return null; // or render an appropriate fallback
    }
  });

  return (
    <div id="conversation-list-div" className="col-md-4 col-xl-3 chat">
      <div
        id="conversation-list-card"
        className="card mb-sm-3 mb-md-0 contacts_card h-100"
      >
        <div className={`card-header colors`}>
          <div
            className="d-flex justify-content-center text-white"
            style={{ cursor: "pointer", width: "100%" }}
            onClick={() => setShowUsersDropdown(!showUsersDropdown)}
          >
            <p className="m-1 fs-6">New Conversation</p>
            <BsPencilSquare style={{ color: "white" }} size={25} />
          </div>
          {showUsersDropdown ? (
            <div className="d-flex justify-content-center mb-4" style={{ width: "100%" }}>
              <select
                ref={selectUsersRef}
                className="form-select"
                aria-label="Default select example"
                defaultValue=""
              >
                <option value="">Select a User</option>
                {users.map((selectedUser) => (
                  <option key={selectedUser.username} value={selectedUser.username}>
                    {selectedUser.username}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="btn btn-secondary h-1"
                onClick={() => {
                  setShowUsersDropdown(false);
                  onCreate(selectUsersRef.current.value);
                }}
              >
                Create
              </button>
            </div>
          ) : null}

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
