// import React, { useEffect, useState } from "react";

// import MessageList from "./MessageList";
// import ConversationList from "./Conversations";



// export default function ConversationsIndex() {
//   const [conversations, setConversations] = useState([]);
//   const [currentConversation, setCurrentConversation] = useState({});
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [currentMessages, setCurrentMessages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch conversations from the server
//     fetch("/conversations")
//       .then((response) => response.json())
//       .then((data) => {
//         setConversations(data);
//       })
//       .catch((error) => console.error("Error fetching conversations:", error));
//   }, []);

//   // Handle conversation selection
//   const handleSelectConversation = (conversation) => {
//     setCurrentConversation(conversation);
//     setCurrentMessages(conversation.messages);
//   };

//   // Handle message submit
//   const handleSubmitMessage = () => {
//     if (currentMessage.trim() === "") return;

//     // Create a new message and update the currentMessages state
//     const newMessage = {
//       id: currentMessages.length + 1, // Generate a unique ID
//       content: currentMessage,
//       sender: currentConversation.freelancer_id, // Assuming freelancer is the sender
//       conversation_id: currentConversation.id,
//       updated_at: new Date().toISOString(), // Current timestamp
//     };

//     setCurrentMessages([...currentMessages, newMessage]);
//     setCurrentMessage("");
//   };

//   return (
//     <div className="conversations-index">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <ConversationList
//               conversations={conversations}
//               currentConversation={currentConversation}
//               onSelectConversation={handleSelectConversation}
//               onCreateConversation={() => {}}
//               onSearch={(search) => setSearchTerm(search)}
//             />
//           </div>
//           <div className="col-md-8">
//             <MessageList
//               conversation={currentConversation}
//               messages={currentMessages}
//               currentMessage={currentMessage}
//               onEdit={(editedMessage) => setCurrentMessage(editedMessage)}
//               onSubmit={handleSubmitMessage}
//               onDelete={(deletedMessage) => {
//                 // Handle message deletion
//                 const updatedMessages = currentMessages.filter(
//                   (message) => message.id !== deletedMessage.id
//                 );
//                 setCurrentMessages(updatedMessages);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import ConversationList from "./Conversations";
import NavbarComponent from "./NavbarComponent";

export default function ConversationsIndex() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);

  useEffect(() => {
    // Fetch conversations from the server
    fetch("/conversations")
      .then((response) => response.json())
      .then((data) => {
        setConversations(data);
      })
      .catch((error) => console.error("Error fetching conversations:", error));
  }, []);

  // Handle conversation selection
  const handleSelectConversation = (conversation) => {
    setCurrentConversation(conversation);
    setCurrentMessages(conversation.messages);
  };

  // Handle message submit
  const handleSubmitMessage = () => {
    if (currentMessage.trim() === "") return;

    // Create a new message and update the currentMessages state
    const newMessage = {
      id: currentMessages.length + 1, // Generate a unique ID
      content: currentMessage,
      sender: currentConversation.freelancer_id, // Assuming freelancer is the sender
      conversation_id: currentConversation.id,
      updated_at: new Date().toISOString(), // Current timestamp
    };

    setCurrentMessages([...currentMessages, newMessage]);
    setCurrentMessage("");
  };

  return (
    <div>
        <NavbarComponent/>
    <div className="conversations-index">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ConversationList
              conversations={conversations}
              currentConversation={currentConversation}
              onSelectConversation={handleSelectConversation}
              onCreateConversation={() => {}}
              onSearch={() => {}}
            />
          </div>
          <div className="col-md-8">
            <MessageList
              conversation={currentConversation}
              messages={currentMessages}
              currentMessage={currentMessage}
              onEdit={(editedMessage) => setCurrentMessage(editedMessage)}
              onSubmit={handleSubmitMessage}
              onDelete={(deletedMessage) => {
                // Handle message deletion
                const updatedMessages = currentMessages.filter(
                  (message) => message.id !== deletedMessage.id
                );
                setCurrentMessages(updatedMessages);
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
