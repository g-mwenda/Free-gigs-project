
import React, { useState, useEffect, useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from '../context/AuthContext';
import proposals from '../styles/proposal.css'; // Make sure to import your CSS file
import AcceptedProposals from './AcceptedProposals';
import RejectedProposals from './RejectedProposals';
import Swal from "sweetalert2";

function Proposals() {
  const { current_user } = useContext(AuthContext);
  const [proposalsList, setProposalsList] = useState([]);
  const [acceptedProposals, setAcceptedProposals] = useState([]);
  const [rejectedProposals, setRejectedProposals] = useState([]);

  useEffect(() => {
    fetch('/proposals')
      .then((response) => response.json())
      .then((data) => {
        setProposalsList(data);
        Swal.fire("Success", "Proposals fetching successful", "success");
      })
      .catch((error) => console.error('Error fetching proposal listings:', error));
  }, []);

  useEffect(() => {
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
        setProposalsList((prevProposals) =>
          prevProposals.map((proposal) =>
            proposal.id === proposalId ? { ...proposal, accepted: true } : proposal
          )
        );
        Swal.fire("Success", "Proposal accepted", "success");
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
        setProposalsList((prevProposals) =>
          prevProposals.map((proposal) =>
            proposal.id === proposalId ? { ...proposal, rejected: true } : proposal
          )
        );
        Swal.fire("Success", "Proposal rejected", "success");
      })
      .catch((error) => console.error('Error rejecting proposal:', error));
  };

  const handleDelete = (proposalId) => {
    console.log(`Deleting proposal ${proposalId}`);
    fetch(`/proposals/${proposalId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setProposalsList((prevProposals) => prevProposals.filter((proposal) => proposal.id !== proposalId));
          Swal.fire("Success", "Proposal deleted", "success");
        } else {
          throw new Error('Failed to delete proposal');
        }
      })
      .catch((error) => console.error('Error deleting proposal:', error));
  };

  const proposalsForClient = proposalsList.filter(
    (proposal) => !proposal.accepted && !proposal.rejected
  );
  const proposalsForFreelancer = proposalsList.filter(
    (proposal) =>
      proposal.freelancer.id === current_user?.user_id && !proposal.accepted && !proposal.rejected
  );

  return (
    <div className="container mt-5">
      <NavbarComponent />
      <h2 className="mb-4">Proposals</h2>
      <div className="row">
        {current_user?.role === 'client'
          ? proposalsForClient.map((proposal) => (
              // Render proposals for clients
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
              // Render proposals for freelancers
              <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="custom-card proposalcard">
                  <div className="custom-card-details proposalcard-image">
                    <p className="custom-text-body">Job Listing ID: {proposal.job_listing_id}</p>
                    <p className="custom-text-body">Freelancer: {proposal.freelancer.name}</p>
                    <p className="custom-text-body">Project Details: {proposal.project_details}</p>
                    <p className="custom-text-body">Cost Estimate: {proposal.cost_estimate}</p>
                    <p className="custom-text-body">Timeline: {proposal.timeline}</p>
                    <div className="custom-card-buttons">
                      <button className="custom-card-button btn btn-secondary" onClick={() => handleDelete(proposal.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Render AcceptedProposals and RejectedProposals for both roles */}
      {(current_user?.role === 'client' || current_user?.role === 'freelancer') && acceptedProposals.length > 0 && (
        <AcceptedProposals acceptedProposals={acceptedProposals} />
      )}
      {(current_user?.role === 'client' || current_user?.role === 'freelancer') && rejectedProposals.length > 0 && (
        <RejectedProposals rejectedProposals={rejectedProposals} />
      )}
    </div>
  );
}

export default Proposals;
