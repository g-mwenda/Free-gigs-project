import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";

const Conversations = () => {
  const [conversations, setConversations] = useState([]);
  const { clientId } = useParams(); // Get the client ID from URL parameters
  const [selectedConversation, setSelectedConversation] = useState(null);

  // Simulate conversations data fetching (replace with actual API call)
  useEffect(() => {
    // Fetch conversations data based on the client ID
    // For example:
    const fetchConversations = async () => {
      try {
        const response = await fetch(`/api/conversations?clientId=${clientId}`);
        const data = await response.json();
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [clientId]);

  // Function to handle conversation selection
  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <>
      <NavbarComponent />
      <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
        <MDBRow>
          {/* Left section for conversations */}
          <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">
              Member
            </h5>
            {selectedConversation ? (
              // Render the selected client/freelancer's profile
              <MDBCard>
                <MDBCardBody>
                  <img
                    src={selectedConversation.avatar}
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="100"
                  />
                  <h5>{selectedConversation.name}</h5>
                  {/* Add more profile details if needed */}
                </MDBCardBody>
              </MDBCard>
            ) : (
              <MDBCard>
                <MDBCardBody>
                  <p>No conversations yet.</p>
                </MDBCardBody>
              </MDBCard>
            )}
          </MDBCol>

          {/* Right section for messages */}
          <MDBCol md="6" lg="7" xl="8">
            <MDBTypography listUnStyled>
              {selectedConversation ? (
                // Render messages for the selected conversation
                <p>Selected conversation messages will be shown here.</p>
              ) : (
                <p>Select a conversation to view messages.</p>
              )}
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
};

export default Conversations;
