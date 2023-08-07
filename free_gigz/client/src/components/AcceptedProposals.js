// // works OK,sends completed proposal to completed proposals table
// import React, { useState } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { useNavigate } from 'react-router-dom';

// const AcceptedProposals = ({ acceptedProposals, setAcceptedProposals }) => {
//   const [completedProposals, setCompletedProposals] = useState([]);
//   const navigate = useNavigate();

//   const handleCompletedClick = async (proposalId) => {
//     try {
//       const proposalResponse = await fetch(`/proposals/${proposalId}`);
//       const proposalData = await proposalResponse.json();

//       const { freelancer_id, job_listing_id } = proposalData;

//       // Fetch the job listing to get the client_id
//       const jobListingResponse = await fetch(`/job_listings/${job_listing_id}`);
//       const jobListingData = await jobListingResponse.json();
//       const client_id = jobListingData.client_id;

//       const completedProjectData = {
//         freelancer_id,
//         client_id,
//         job_listing_id,
//         project_status: 'Completed',
//         completed_date: new Date().toISOString().split('T')[0],
//       };

//       const response = await fetch('/completed_projects', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ completed_project: completedProjectData }),
//       });

//       if (response.ok) {
//         console.log('Job Listing Completed:', job_listing_id);
//         navigate('/completedform');
//         // Update UI or state as needed
//       } else {
//         console.error('Failed to mark job listing as completed.');
//         const errorData = await response.json();
//         console.error('Error details:', errorData);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Accepted Proposals</h2>
//       {acceptedProposals && acceptedProposals.length > 0 ? (
//         <div style={styles.proposalsContainer}>
//           {acceptedProposals.map((proposal) => (
//             <div key={proposal.id} style={styles.proposalCard}>
//               <p style={styles.proposalDetails}>Job Listing ID: {proposal.job_listing_id}</p>
//               <p style={styles.proposalDetails}>Freelancer: {proposal.freelancer.name}</p>
//               <p style={styles.proposalDetails}>Project Details: {proposal.project_details}</p>
//               <p style={styles.proposalDetails}>Cost Estimate: {proposal.cost_estimate}</p>
//               <p style={styles.proposalDetails}>Timeline: {proposal.timeline}</p>
//               <button
//                 onClick={() => handleCompletedClick(proposal.id)}
//                 className="btn btn-job"
//               >
//                 Completed
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No accepted proposals yet.</p>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     marginTop: '40px',
//     marginBottom: '20px',
//   },
//   heading: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '16px',
//     color: '#333',
//   },
//   proposalsContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   proposalCard: {
//     backgroundColor: '#f4f4f4',
//     borderRadius: '8px',
//     padding: '16px',
//     margin: '8px',
//     width: '300px',
//     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//     boxSizing: 'border-box',
//   },
//   proposalDetails: {
//     marginBottom: '8px',
//     fontSize: '14px',
//     color: '#555',
//   },
// };

// export default AcceptedProposals;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AcceptedProposals = ({ acceptedProposals, setAcceptedProposals }) => {
  // const [completedProposals, setCompletedProposals] = useState([]);
  const navigate = useNavigate();

  const handleCompletedClick = async (proposalId) => {
    try {
      const proposalResponse = await fetch(`/proposals/${proposalId}`);
      const proposalData = await proposalResponse.json();

      const { freelancer_id, job_listing_id } = proposalData;

      // Fetch the job listing to get the client_id
      const jobListingResponse = await fetch(`/job_listings/${job_listing_id}`);
      const jobListingData = await jobListingResponse.json();
      const client_id = jobListingData.client_id;

      const completedProjectData = {
        freelancer_id,
        client_id,
        job_listing_id,
        project_status: 'Completed',
        completed_date: new Date().toISOString().split('T')[0],
      };

      const response = await fetch('/completed_projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed_project: completedProjectData }),
      });

      if (response.ok) {
        console.log('Job Listing Completed:', job_listing_id);

        // Delete the proposal
        const deleteProposalResponse = await fetch(`/proposals/${proposalId}`, {
          method: 'DELETE',
        });

        if (deleteProposalResponse.ok) {
          console.log('Proposal deleted:', proposalId);
        } else {
          console.error('Failed to delete proposal:', proposalId);
        }

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
