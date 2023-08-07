import React, { useState } from 'react';
import NavbarComponent from './NavbarComponent';
import { useNavigate } from 'react-router-dom';

const AcceptedProposals = ({ acceptedProposals, setAcceptedProposals }) => {
  const [completedProposals, setCompletedProposals] = useState([]); // State to store completed proposals
  const navigate = useNavigate();

  const handleCompletedClick = async (jobListingId, freelancerId, clientId) => {
    try {
      // Mark the proposal as accepted in the proposals table
      // This step could be handled earlier in your application logic
      // For demonstration purposes, let's assume you've already done this
  
      // Prepare data for the completed project
      const completedProjectData = {
        freelancer_id: freelancerId,
        client_id: clientId,
        job_listing_id: jobListingId,
        project_status: 'Completed',
        completed_date: new Date().toISOString().split('T')[0], // Use current date
      };
  
      // Send a POST request to your backend API to create a new completed project
      const response = await fetch('/completed_projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed_project: completedProjectData }), // Wrap in a completed_project object
      });
  
      if (response.ok) {
        console.log('Job Listing Completed:', jobListingId);
        navigate('/completedform');
        // Update UI or state as needed
      } else {
        console.error('Failed to mark job listing as completed.');
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>Accepted Proposals</h2>
        {acceptedProposals && acceptedProposals.length > 0 ? (
          <div style={styles.proposalsContainer}>
            {acceptedProposals.map((proposal) => (
              <div key={proposal.id} style={styles.proposalCard}>
                <p style={styles.proposalDetails}>Job Listing ID: {proposal.job_listing_id}</p>
                <p style={styles.proposalDetails}>Freelancer: {proposal.freelancer.name}</p>
                <p style={styles.proposalDetails}>Project Details: {proposal.project_details}</p>
                <p style={styles.proposalDetails}>Cost Estimate: {proposal.cost_estimate}</p>
                <p style={styles.proposalDetails}>Timeline: {proposal.timeline}</p>
                <button
                  onClick={() => handleCompletedClick(proposal.id)}
                  className="btn btn-job"
                >
                  Completed
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No accepted proposals yet.</p>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  },
  proposalsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  proposalCard: {
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    width: '300px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  proposalDetails: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
  },
};

export default AcceptedProposals;



  // const handleCompletedClick = (proposalId) => {
  //   // Find the accepted proposal to be marked as completed
  //   const completedProposal = acceptedProposals.find((proposal) => proposal.id === proposalId);

  //   // Add the completed proposal to the completedProposals state
  //   setCompletedProposals((prevCompletedProposals) => [...prevCompletedProposals, completedProposal]);

  //   // Remove the completed proposal from the acceptedProposals state
  //   setAcceptedProposals((prevAcceptedProposals) =>
  //     prevAcceptedProposals.filter((proposal) => proposal.id !== proposalId)
  //   );

  //   // Handle the submission of the completed proposal to the backend here
  //   // You can make a POST request to add the completed proposal to the completed projects table
  //   // For demonstration purposes, let's just log a message to the console
  //   console.log('Proposal Completed:', proposalId);

  //   // Redirect to the completed form page
  //   navigate('/completedform');

  //   // Set showCompletedForm to true if you want to show the CompletedForm component here
  //   // setShowCompletedForm(true);
  // };
  // const handleCompletedClick = async (jobListingId, freelancerId, clientId) => {
  //   try {
  //     // Mark the proposal as accepted in the proposals table
  //     // This step could be handled earlier in your application logic
  //     // For demonstration purposes, let's assume you've already done this
  
  //     // Prepare data for the completed project
  //     const completedProjectData = {
  //       freelancer_id: freelancerId,
  //       client_id: clientId,
  //       job_listing_id: jobListingId,
  //       project_status: 'Completed',
  //       completed_date: new Date().toISOString().split('T')[0], // Use current date
  //     };
  
  //     // Send a POST request to your backend API to create a new completed project
  //     const response = await fetch('/completed_projects', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(completedProjectData),
  //     });
  
  //     if (response.ok) {
  //       console.log('Job Listing Completed:', jobListingId);
  //       navigate('/completedform');
  //       // Update UI or state as needed
  //     } else {
  //       console.error('Failed to mark job listing as completed.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };