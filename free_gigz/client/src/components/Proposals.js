// import React, { useState, useEffect } from 'react'
// import NavbarComponent from "./NavbarComponent";

// function Proposals() {
//     const [proposals, setProposals] = useState([]);
//     useEffect(() => {
//         fetch("/proposals")
//           .then((response) => response.json())
//           .then((data) => setProposals(data))
//           .catch((error) => console.error("Error fetching proposal listings:", error));
//       }, []);
//   return (
//     <div className="container mt-5">
//     <NavbarComponent />
//     <h2 className="mb-4">Proposals</h2>
//     <div className="row">
//       {proposals.map((proposal) => (
//         <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//           {/* <proposalListingItem proposal={proposal} /> Pass the 'proposal' prop here */}
//           <div class="proposalcard">
//   <div class="proposalcard-image">
//   <p class="jobtext-body">Freelancer {proposal.freelancer.name}</p>
//   <p class="jobtext-body">Deadline: {proposal.deadline}</p>
//   <p class="proposaltext-body">Description: {proposal.description}</p>
//     <p class="proposaltext-body">Budget: {proposal.budget}</p>
//   </div>
//   <div class="proposalcard-description">
//     <h3 class="proposaltext-title">{proposal.title}</h3>

//   </div>
// </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// }

// export default Proposals

import React, { useState, useEffect } from 'react';
import NavbarComponent from './NavbarComponent';

function Proposals() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch('/proposals')
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposal listings:', error));
  }, []);

  return (
    <div className="container mt-5">
      <NavbarComponent />
      <h2 className="mb-4">Proposals</h2>
      <div className="row">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="proposalcard">
              <div className="proposalcard-image">
              {/* <div className="proposalcard-description">
                <h3 className="proposaltext-title">Proposal ID: {proposal.id}</h3>
              </div> */}
              <p className="proposaltext-body">Job Listing ID: {proposal.job_listing_id}</p>
                <p className="jobtext-body">Freelancer: {proposal.freelancer.name}</p>
                <p className="jobtext-body">Project Details: {proposal.project_details}</p>
                <p className="proposaltext-body">Cost Estimate: {proposal.cost_estimate}</p>
                <p className="proposaltext-body">Timeline: {proposal.timeline}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proposals;
