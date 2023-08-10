import React from 'react';

const RejectedProposals = ({ rejectedProposals }) => {
  const proposalCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const infoStyle = {
    fontSize: '14px',
    marginBottom: '4px',
  };

  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Rejected Proposals</h2>
      {rejectedProposals.map((proposal) => (
        <div key={proposal.id} style={proposalCardStyle}>
          <p style={titleStyle}>Job Listing ID: {proposal.job_listing_id}</p>
          <p style={infoStyle}>Freelancer: {proposal.freelancer.name}</p>
          <p style={infoStyle}>Project Details: {proposal.project_details}</p>
          <p style={infoStyle}>Cost Estimate: {proposal.cost_estimate}</p>
          <p style={infoStyle}>Timeline: {proposal.timeline}</p>
        </div>
      ))}
    </div>
  );
};

export default RejectedProposals;
