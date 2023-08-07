//  component works, accepts and rejects proposals on the client side
// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import proposals from "../styles/proposal.css";
// import AcceptedProposals from './AcceptedProposals';
// import RejectedProposals from './RejectedProposals';

// function Proposals() {
//   const { current_user } = useContext(AuthContext);
//   const [proposals, setProposals] = useState([]);
//   const [acceptedProposals, setAcceptedProposals] = useState([]);
//   const [rejectedProposals, setRejectedProposals] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     console.log(`Proposal ${proposalId} accepted`);
//     const acceptedProposal = proposals.find((proposal) => proposal.id === proposalId);
//     if (acceptedProposal) {
//       setAcceptedProposals((prevAcceptedProposals) => [...prevAcceptedProposals, acceptedProposal]);
//       setProposals((prevProposals) => prevProposals.filter((proposal) => proposal.id !== proposalId));
//     }
//   };

//   const handleReject = (proposalId) => {
//     console.log(`Proposal ${proposalId} rejected`);
//     const rejectedProposal = proposals.find((proposal) => proposal.id === proposalId);
//     if (rejectedProposal) {
//       setRejectedProposals((prevRejectedProposals) => [...prevRejectedProposals, rejectedProposal]);
//       setProposals((prevProposals) => prevProposals.filter((proposal) => proposal.id !== proposalId));
//     }
//   };

//   const handleDelete = (proposalId) => {
//     console.log(`Deleting proposal ${proposalId}`);
//     // Implement your logic for deleting a proposal
//     fetch(`/proposals/${proposalId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           setProposals((prevProposals) => (
//             prevProposals.filter((proposal) => proposal.id !== proposalId)
//           ));
//         } else {
//           throw new Error('Failed to delete proposal');
//         }
//       })
//       .catch((error) => console.error('Error deleting proposal:', error));
//   };

//   return (
//     <div className="container mt-5">
//       <NavbarComponent />
//       <h2 className="mb-4">Proposals</h2>
//       <div className="row">
//         {proposals.map((proposal) => (
//           <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <div className="custom-card proposalcard">
//               <div className="custom-card-details proposalcard-image">
//                 <p className="custom-text-body">Job Listing ID: {proposal.job_listing_id}</p>
//                 <p className="custom-text-body">Freelancer: {proposal.freelancer.name}</p>
//                 <p className="custom-text-body">Project Details: {proposal.project_details}</p>
//                 <p className="custom-text-body">Cost Estimate: {proposal.cost_estimate}</p>
//                 <p className="custom-text-body">Timeline: {proposal.timeline}</p>
//                 <div className="custom-card-buttons">
//                   {current_user && current_user.role === "client" && (
//                     <>
//                       <button
//                         className="custom-card-button btn btn-success"
//                         onClick={() => handleAccept(proposal.id)}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         className="custom-card-button btn btn-danger"
//                         onClick={() => handleReject(proposal.id)}
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}

//                   {current_user && current_user.role === "freelancer" && (
//                     <>
//                       {proposal.freelancer.id === current_user.user_id && (
//                         <>
//                           <button
//                             className="custom-card-button btn btn-primary"
//                             // onClick={() => handleEdit(proposal.id)}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className="custom-card-button btn btn-secondary"
//                             onClick={() => handleDelete(proposal.id)}
//                           >
//                             Delete
//                           </button>
//                         </>
//                       )}
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <AcceptedProposals acceptedProposals={acceptedProposals} />
//       <RejectedProposals rejectedProposals={rejectedProposals} />
//     </div>
//   );
// }

// export default Proposals;
import React, { useState, useEffect, useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import proposals from '../styles/proposal.css';
import AcceptedProposals from './AcceptedProposals';
import RejectedProposals from './RejectedProposals';

function Proposals() {
  const { current_user } = useContext(AuthContext);
  const [proposalsList, setProposalsList] = useState([]); // Changed the name to avoid naming conflict
  const [acceptedProposals, setAcceptedProposals] = useState([]);
  const [rejectedProposals, setRejectedProposals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/proposals')
      .then((response) => response.json())
      .then((data) => setProposalsList(data))
      .catch((error) => console.error('Error fetching proposal listings:', error));
  }, []);

  useEffect(() => {
    // Filter proposals based on acceptance and rejection status
    const filteredAcceptedProposals = proposalsList.filter((proposal) => proposal.accepted === true);
    const filteredRejectedProposals = proposalsList.filter((proposal) => proposal.rejected === true);
    setAcceptedProposals(filteredAcceptedProposals);
    setRejectedProposals(filteredRejectedProposals);
  }, [proposalsList]);

  const handleAccept = (proposalId) => {
    console.log(`Proposal ${proposalId} accepted`);
    fetch(`/proposals/${proposalId}/accept`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Assuming the backend updates the accepted field to true
        // You don't need to manually filter proposals here since it's done in the useEffect above
      })
      .catch((error) => console.error('Error accepting proposal:', error));
  };

  const handleReject = (proposalId) => {
    console.log(`Proposal ${proposalId} rejected`);
    fetch(`/proposals/${proposalId}/reject`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Assuming the backend updates the rejected field to true
        // You don't need to manually filter proposals here since it's done in the useEffect above
      })
      .catch((error) => console.error('Error rejecting proposal:', error));
  };

  const handleDelete = (proposalId) => {
    console.log(`Deleting proposal ${proposalId}`);
    // Implement your logic for deleting a proposal
    fetch(`/proposals/${proposalId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setProposalsList((prevProposals) => prevProposals.filter((proposal) => proposal.id !== proposalId));
        } else {
          throw new Error('Failed to delete proposal');
        }
      })
      .catch((error) => console.error('Error deleting proposal:', error));
  };

  // Filter proposals based on status for both freelancer and client
  const proposalsForClient = proposalsList.filter((proposal) => !proposal.accepted && !proposal.rejected);
  const proposalsForFreelancer = proposalsList.filter((proposal) => proposal.freelancer.id === current_user.user_id);

  return (
    <div className="container mt-5">
      <NavbarComponent />
      <h2 className="mb-4">Proposals</h2>
      <div className="row">
        {current_user.role === 'client'
          ? proposalsForClient.map((proposal) => (
              <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                {/* Render normal proposals for clients */}
                <div className="custom-card proposalcard">
                  <div className="custom-card-details proposalcard-image">
                    <p className="custom-text-body">Job Listing ID: {proposal.job_listing_id}</p>
                    <p className="custom-text-body">Freelancer: {proposal.freelancer.name}</p>
                    <p className="custom-text-body">Project Details: {proposal.project_details}</p>
                    <p className="custom-text-body">Cost Estimate: {proposal.cost_estimate}</p>
                    <p className="custom-text-body">Timeline: {proposal.timeline}</p>
                    <div className="custom-card-buttons">
                      <button className="custom-card-button btn btn-success" onClick={() => handleAccept(proposal.id)}>
                        Accept
                      </button>
                      <button className="custom-card-button btn btn-danger" onClick={() => handleReject(proposal.id)}>
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : proposalsForFreelancer.map((proposal) => (
              <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                {/* Render normal proposals for freelancers */}
                <div className="custom-card proposalcard">
                  <div className="custom-card-details proposalcard-image">
                    <p className="custom-text-body">Job Listing ID: {proposal.job_listing_id}</p>
                    <p className="custom-text-body">Freelancer: {proposal.freelancer.name}</p>
                    <p className="custom-text-body">Project Details: {proposal.project_details}</p>
                    <p className="custom-text-body">Cost Estimate: {proposal.cost_estimate}</p>
                    <p className="custom-text-body">Timeline: {proposal.timeline}</p>
                    <div className="custom-card-buttons">
                      <button className="custom-card-button btn btn-primary">{/* Add your edit functionality here */}</button>
                      <button
                        className="custom-card-button btn btn-secondary"
                        onClick={() => handleDelete(proposal.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Render AcceptedProposals and RejectedProposals for both roles */}
      {(current_user.role === 'client' || current_user.role === 'freelancer') && acceptedProposals.length > 0 && (
        <AcceptedProposals acceptedProposals={acceptedProposals} />
      )}
      {(current_user.role === 'client' || current_user.role === 'freelancer') && rejectedProposals.length > 0 && (
        <RejectedProposals rejectedProposals={rejectedProposals} />
      )}
    </div>
  );
}

export default Proposals;
