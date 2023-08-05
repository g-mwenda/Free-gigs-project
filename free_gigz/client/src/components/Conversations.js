import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function App() {
  const conversations = [
    {
      name: "John Doe",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp",
      messages: [
        { text: "Hello, Are you there?", time: "Just now", sender: "me" },
        { text: "Yes, I'm here!", time: "Just now", sender: "John Doe" },
      
      ],
    },
    {
      name: "Jane Smith",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
      messages: [
        { text: "Hi, how are you?", time: "5 mins ago", sender: "me" },
        { text: "I'm doing well, thanks!", time: "5 mins ago", sender: "Jane Smith" },

      ],
    },
  ];

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0] // Set the initial selected conversation to the first one
  );

  return (
    <>
      <NavbarComponent /> {/* Add the NavbarComponent here */}
      <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
        <MDBRow>
          {/* Left section for conversations */}
          <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">
              Member
            </h5>
            <MDBCard>
              <MDBCardBody>
                <MDBTypography listUnStyled className="mb-0">
                  {conversations.map((conversation, index) => (
                    <li
                      key={index}
                      className={`p-2 border-bottom ${
                        selectedConversation === conversation ? "bg-primary text-white" : ""
                      }`}
                      style={{ backgroundColor: "#eee", cursor: "pointer" }}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={conversation.avatar}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">{conversation.name}</p>
                            <p className="small text-muted">
                              {conversation.messages[0].text}
                            </p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">
                            {conversation.messages[0].time}
                          </p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Right section for messages */}
          <MDBCol md="6" lg="7" xl="8">
            <MDBTypography listUnStyled>
              {selectedConversation.messages.map((message, index) => (
                <li
                  key={index}
                  className={`d-flex justify-content-between mb-4 ${
                    message.sender === "me" ? "flex-row-reverse" : ""
                  }`}
                >
                  {message.sender !== "me" && (
                    <img
                      src={selectedConversation.avatar}
                      alt="avatar"
                      className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                      width="60"
                    />
                  )}
                  <MDBCard
                    className={`w-100 ${
                      message.sender === "me" ? "bg-primary text-white" : "bg-light"
                    }`}
                  >
                    <MDBCardHeader className="d-flex justify-content-between p-3">
                      <p className="fw-bold mb-0">{message.sender}</p>
                      <p className="text-muted small mb-0">
                        <MDBIcon far icon="clock" /> {message.time}
                      </p>
                    </MDBCardHeader>
                    <MDBCardBody>
                      <p className="mb-0">{message.text}</p>
                    </MDBCardBody>
                  </MDBCard>
                  {message.sender === "me" && (
                    <img
                      src={selectedConversation.avatar}
                      alt="avatar"
                      className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                      width="60"
                    />
                  )}
                </li>
              ))}
            </MDBTypography>
            <li className="bg-white mb-3">
              <MDBTextArea label="Message" id="textAreaExample" rows={4} />
            </li>
            <MDBBtn color="info" rounded className="float-end">
              Send
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
