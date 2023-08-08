import React from "react";
// import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import PostingForm from "./PostingForm";
import { SystemModeProvider } from "../SystemModeContext";
import LandingPage from "./LandingPage";
import JobListing from "./JobListing";
import JobListingForm from "./JobListingForm";
import JobListingItem from "./JobListingItem";
import CompletedForm from "./CompletedForm";
import ClientForm from "./ClientForm";
import { AuthProvider } from "../context/AuthContext"
import Freelancers from "./freelancers";
import UserProfile from "./UserProfile";
import ProposalsForm from "./ProposalsForm";
import FreelancerForm from "./FreelancerForm";
import Proposals from "./Proposals";
import Clients from "./Clients";
import UpdateProposalForm from "./UpdateProposalForm"
import  Conversations from "./Conversations";
import AcceptedProposals from "./AcceptedProposals";
import RejectedProposals from "./RejectedProposals";
import ConversationsIndex from "./ConversationsIndex";
import MessageList from "./MessageList";


function App() {
  

  // const navigate = useNavigate();
    // const handleLogin = (userData) => {
  //   setUser(userData);
  // };
  return (
    <>
      <AuthProvider>
        <SystemModeProvider>
          <div className="App">
                        <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/login" element={<Login/>} />
              <Route path="/home" element={<Home  />} /> 
              <Route exact path="/postings" element={<PostingForm />} />
              {/* Remove / path from SignUpForm */}
              <Route path="/signup" element={<SignUpForm />} />
              <Route exact path="/joblistingform" element={<JobListingForm />} />
              <Route exact path="/joblisting" element={<JobListing />} />
              <Route exact path="/joblisting_item" element={<JobListingItem />} />
              <Route path="/completedform" element={<CompletedForm />} />
              <Route exact path="/client" element={<ClientForm />} />
              <Route exact path="/freelancers" element={<Freelancers />} />
              <Route exact path="/me" element={<UserProfile />} />  
              <Route exact path="/proposals" element={<ProposalsForm  />} />
              <Route exact path="/freelancerform" element={<FreelancerForm  />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route exact path="/jobproposals" element={<Proposals  />} />    
              <Route exact path="/clients" element={<Clients  />} />
              <Route exact path="/updateproposal/:proposalId" element={<UpdateProposalForm />} /> 
              <Route exact path="/acceptedproposals" element={<AcceptedProposals />} /> 
              <Route exact path="/rejectedproposals" element={<RejectedProposals />} />  
              <Route exact path="/messages" element={<MessageList />} />
              <Route path="/chat" element={<ConversationsIndex />} />

                    {/*element={<UpdateProposalForm />}  */}
            </Routes>
            
          </div>
          
        </SystemModeProvider>
        </AuthProvider>

     
     </>
  );
}

export default App;



  // const [listings, setListings] = useState([]);

  // const handleJobSubmit = (newListing) => {
  //   // Update the job listings state with the new job listing
  //   setListings([...listings, newListing]);
  // };
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // const handleLogin = (userData) => {
  //   setUser(userData);
  // };

  // function handleLogout() {
  //   fetch("/logout", {
  //     method: "DELETE",
  //     headers: {
  //       "CONTENT-TYPE": "application/json",
  //     },
  //   }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  //   navigate("/login");
  // }

  // if (user === null) return <LandingPage />;
//user={user}