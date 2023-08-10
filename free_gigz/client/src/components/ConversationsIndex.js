// // import React, { useEffect, useState } from "react";

// // import MessageList from "./MessageList";
// // import ConversationList from "./Conversations";



// // export default function ConversationsIndex() {
// //   const [conversations, setConversations] = useState([]);
// //   const [currentConversation, setCurrentConversation] = useState({});
// //   const [currentMessage, setCurrentMessage] = useState("");
// //   const [currentMessages, setCurrentMessages] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   useEffect(() => {
// //     // Fetch conversations from the server
// //     fetch("/conversations")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setConversations(data);
// //       })
// //       .catch((error) => console.error("Error fetching conversations:", error));
// //   }, []);

// //   // Handle conversation selection
// //   const handleSelectConversation = (conversation) => {
// //     setCurrentConversation(conversation);
// //     setCurrentMessages(conversation.messages);
// //   };

// //   // Handle message submit
// //   const handleSubmitMessage = () => {
// //     if (currentMessage.trim() === "") return;

// //     // Create a new message and update the currentMessages state
// //     const newMessage = {
// //       id: currentMessages.length + 1, // Generate a unique ID
// //       content: currentMessage,
// //       sender: currentConversation.freelancer_id, // Assuming freelancer is the sender
// //       conversation_id: currentConversation.id,
// //       updated_at: new Date().toISOString(), // Current timestamp
// //     };

// //     setCurrentMessages([...currentMessages, newMessage]);
// //     setCurrentMessage("");
// //   };

// //   return (
// //     <div className="conversations-index">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-4">
// //             <ConversationList
// //               conversations={conversations}
// //               currentConversation={currentConversation}
// //               onSelectConversation={handleSelectConversation}
// //               onCreateConversation={() => {}}
// //               onSearch={(search) => setSearchTerm(search)}
// //             />
// //           </div>
// //           <div className="col-md-8">
// //             <MessageList
// //               conversation={currentConversation}
// //               messages={currentMessages}
// //               currentMessage={currentMessage}
// //               onEdit={(editedMessage) => setCurrentMessage(editedMessage)}
// //               onSubmit={handleSubmitMessage}
// //               onDelete={(deletedMessage) => {
// //                 // Handle message deletion
// //                 const updatedMessages = currentMessages.filter(
// //                   (message) => message.id !== deletedMessage.id
// //                 );
// //                 setCurrentMessages(updatedMessages);
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import MessageList from "./MessageList";
// import ConversationList from "./ConversationList";
// import NavbarComponent from "./NavbarComponent";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";


// export default function ConversationsIndex() {
//   const loggedInUser = useContext(AuthContext);
//   const [conversations, setConversations] = useState([]);
//   const [currentConversation, setCurrentConversation] = useState({});
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [currentMessages, setCurrentMessages] = useState([]);

//   useEffect(() => {
//     // Fetch conversations from the server
//     fetch("/conversations")
//       .then((response) => response.json())
//       .then((data) => {
//         setConversations(data);
//       })
//       .catch((error) => console.error("Error fetching conversations:", error));
//   }, []);

//   const handleSelectConversation = (conversation) => {
//     setCurrentConversation(conversation);
//     setCurrentMessages(conversation.messages);
//   };

//   const handleSendMessage = () => {
//     if (currentMessage.trim() === "") return;

//     const newMessage = {
//       id: currentMessages.length + 1,
//       content: currentMessage,
//       sender: currentConversation.freelancer_id,
//       conversation_id: currentConversation.id,
//       updated_at: new Date().toISOString(),
//     };

//     setCurrentMessages([...currentMessages, newMessage]);
//     setCurrentMessage("");
//   };

//   // const handleCreateConversation = (newConversation) => {
//   //   // Send POST request to create a new conversation
//   //   fetch("/conversations", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(newConversation),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((createdConversation) => {
//   //       setConversations([...conversations, createdConversation]);
//   //     })
//   //     .catch((error) =>
//   //       console.error("Error creating conversation:", error)
//   //     );
//   // };

//   return (
//     <div>
//       <NavbarComponent />
//       <div className="conversations-index">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <ConversationList
//                 conversations={conversations}
//                 currentConversation={currentConversation}
//                 onSelectConversation={handleSelectConversation}
//                // onCreateConversation={handleCreateConversation}
//                loggedInUserId={loggedInUser.id} // Pass the user's ID
//                 onSearch={() => {}}
//               />
//             </div>
//             <div className="col-md-8">
//               <MessageList
//                 conversation={currentConversation}
//                 messages={currentMessages}
//                 currentMessage={currentMessage}
//                 onEdit={(editedMessage) => setCurrentMessage(editedMessage)}
//                 onSubmit={handleSendMessage}
//                 onDelete={(deletedMessage) => {
//                   const updatedMessages = currentMessages.filter(
//                     (message) => message.id !== deletedMessage.id
//                   );
//                   setCurrentMessages(updatedMessages);
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import ConversationList from "./ConversationList";
// import MessageList from "./MessageList";

// export default function ConversationIndex() {
//   return (
//     <div>
//       <h1>My Conversations</h1>
//       <ConversationList />
//       <MessageList conversation={selectedConversation} />

//       {/* <MessageList /> */}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import ConversationList from "./ConversationList";
// import MessageList from "./MessageList";

// export default function ConversationIndex() {
//   const [selectedConversation, setSelectedConversation] = useState(null);

//   return (
//     <div>
//       <h1>My Conversations</h1>
//       <ConversationList onSelectConversation={setSelectedConversation} />
//       {selectedConversation && <MessageList conversation={selectedConversation} />}
//     </div>
//   );
// }

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import toast, { Toaster } from "react-hot-toast";
// import ConversationList from "./ConversationList";
// import MessageList from "./MessageList";

// export default function ConversationsIndex() {
//   const [conversations, setConversations] = useState([]);
//   const [currentConversation, setCurrentConversation] = useState({});
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [currentMessages, setCurrentMessages] = useState([]);
//   const [conversationSearch, setConversationSearch] = useState("");
//   const [fetchMethod, setFetchMethod] = useState("POST");

//   const { user } = useContext(AuthContext); // Access 'user' from AuthContext

//   const failureNotify = () =>
//     toast.error("Message Not Sent! Please include a message before sending.");

//   useEffect(() => {
//     fetch("/conversations").then((r) => {
//       if (r.ok) {
//         r.json().then((conversations) => {
//         setConversations(conversations);
//         setCurrentMessages(conversations.messages);
//       });
//     }
//   }, []);

//   // Define the missing functions here
//   const filteredConversations = conversations.filter((conversation) =>
//     conversation.users.join(",").includes(conversationSearch)
//   );

//   const handleConversationSearch = (search) => {
//     setConversationSearch(search);
//   };

//   const handleSelectConversation = (conversation) => {
//     setCurrentConversation(conversation);
//     setCurrentMessages(conversation.messages);
//   };

//   const handleCreateConversation = (newUsername) => {
//     // Your implementation here
//   };

//   const handleSubmitMessage = (message) => {
//     // Your implementation here
//   };

//   const handleEditMessage = (editedMessage) => {
//     setCurrentMessage(editedMessage);
//   };

//   return (
//     <>
//       <h1 className="page-header">Your Conversations</h1>
//       <Toaster />
//       <div className="container-fluid">
//         <div
//           id="conversation-page-parent-div"
//           className="row my-4 justify-content-center h-100"
//         >
//           <ConversationList
//             currentConversation={currentConversation}
//             conversations={filteredConversations}
//             onSearch={handleConversationSearch}
//             onSelect={handleSelectConversation}
//             onCreate={handleCreateConversation}
//           />
//           <MessageList
//             conversation={currentConversation}
//             messages={currentMessages}
//             currentMessage={currentMessage}
//             onSubmit={handleSubmitMessage}
//             onEdit={handleEditMessage}
//           />
//         </div>
//       </div>
//     </>
//   );



// }
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ConversationList from "./ConversationList";
import MessageList from "./MessageList";

export default function ConversationsIndex() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [conversationSearch, setConversationSearch] = useState("");

  const { user, users } = useContext(AuthContext); // Access 'user' and 'users' from AuthContext

  const failureNotify = () =>
    toast.error("Message Not Sent! Please include a message before sending.");

  useEffect(() => {
    fetch("/conversations")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((conversations) => {
        setConversations(conversations);
        setCurrentMessages(conversations.messages);
      })
      .catch((error) => {
        console.error("Error fetching conversations:", error);
      });
  }, []);

  const filteredConversations = conversations.filter((conversation) =>
  Array.isArray(conversation.users) &&
  conversation.users.some((user) => user.includes(conversationSearch))
);




  const handleConversationSearch = (search) => {
    setConversationSearch(search);
  };

  const handleSelectConversation = (conversation) => {
    setCurrentConversation(conversation);
    setCurrentMessages(conversation.messages);
  };

  const handleCreateConversation = (newUsername) => {
    const conversationUsers = [user.username, newUsername];
    const existingConversation = conversations.find(
      (conversation) =>
        conversation.users.sort().join(",") === conversationUsers.sort().join(",")
    );

    if (existingConversation) {
      handleSelectConversation(existingConversation);
    } else {
      fetch("/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users: conversationUsers,
        }),
      })
        .then((response) => response.json())
        .then((newConversation) => {
          setCurrentConversation(newConversation);
          setConversations([...conversations, newConversation]);
          setCurrentMessage("");
          setCurrentMessages([]);
        })
        .catch((error) => {
          console.error("Error creating conversation:", error);
        });
    }
  };

  const handleSubmitMessage = (message) => {
    if (!message.trim()) {
      failureNotify();
      return;
    }

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: message,
        sender: user.username,
        conversation_id: currentConversation.id,
      }),
    })
      .then((response) => response.json())
      .then((newMessage) => {
        setCurrentMessages([...currentMessages, newMessage]);
        setCurrentMessage("");
      })
      .catch((error) => {
        console.error("Error submitting message:", error);
      });
  };

  const handleEditMessage = (editedMessage) => {
    setCurrentMessage(editedMessage);
  };

  return (
    <>
      <h1 className="page-header">Your Conversations</h1>
      <Toaster />
      <div className="container-fluid">
        <div
          id="conversation-page-parent-div"
          className="row my-4 justify-content-center h-100"
        >
          <ConversationList
            currentConversation={currentConversation}
            conversations={filteredConversations}
            onSearch={handleConversationSearch}
            onSelect={handleSelectConversation}
            onCreate={handleCreateConversation}
          />
          <MessageList
            conversation={currentConversation}
            messages={currentMessages}
            currentMessage={currentMessage}
            onSubmit={handleSubmitMessage}
            onEdit={handleEditMessage}
          />
        </div>
      </div>
    </>
  );
}
