import React from 'react';
import NavbarComponent from './NavbarComponent';

const AcceptedProposals = ({ acceptedProposals }) => {
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
