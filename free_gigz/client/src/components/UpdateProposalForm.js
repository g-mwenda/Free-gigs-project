// import React, { useState, useEffect } from 'react';
// import NavbarComponent from "./NavbarComponent";

// function UpdateProposalForm({ proposal, onClose }) {
//   const [updatedProposal, setUpdatedProposal] = useState({
//     // Initialize with the existing proposal data
//     // For example:
//     // project_details: proposal.project_details,
//     // cost_estimate: proposal.cost_estimate,
//     // timeline: proposal.timeline,
//     // Add other fields here
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedProposal((prevProposal) => ({
//       ...prevProposal,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Implement your logic to update the proposal on submission
//     // For example:
//     fetch(`/proposals/${proposal.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedProposal),
//     })
//       .then((response) => response.json())
//       .then((updatedData) => {
//         // Handle success and close the form
//         onClose();
//       })
//       .catch((error) => console.error('Error updating proposal:', error));
//   };

//   return (
//     <div>
//         <NavbarComponent/>
//     <div className="update-proposal-form">
//       <h3>Edit Proposal </h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Project Details</label>
//           <textarea
//             name="project_details"
//             value={updatedProposal.project_details}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Cost Estimate</label>
//           <input
//             type="number"
//             name="cost_estimate"
//             value={updatedProposal.cost_estimate}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Timeline</label>
//           <input
//             type="text"
//             name="timeline"
//             value={updatedProposal.timeline}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Add other form fields here */}
//         <button type="submit" className="btn btn-primary">Update Proposal</button>
//         <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default UpdateProposalForm;
import React, { useState, useEffect } from 'react';
import NavbarComponent from "./NavbarComponent";

function UpdateProposalForm({ proposal, onClose }) {
  const [updatedProposal, setUpdatedProposal] = useState({
    // Initialize with the existing proposal data
    project_details: proposal.project_details,
    cost_estimate: proposal.cost_estimate,
    timeline: proposal.timeline,
    // Add other fields here
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProposal((prevProposal) => ({
      ...prevProposal,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to update the proposal on submission
    // For example:
    fetch(`/proposals/${proposal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProposal),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        // Handle success and close the form
        onClose();
      })
      .catch((error) => console.error('Error updating proposal:', error));
  };

  return (
    <div>
      <NavbarComponent />
      <div className="update-proposal-form">
        <h3>Edit Proposal</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Details</label>
            <textarea
              name="project_details"
              value={updatedProposal.project_details}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Cost Estimate</label>
            <input
              type="number"
              name="cost_estimate"
              value={updatedProposal.cost_estimate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Timeline</label>
            <input
              type="text"
              name="timeline"
              value={updatedProposal.timeline}
              onChange={handleInputChange}
            />
          </div>
          {/* Add other form fields here */}
          <button type="submit" className="btn btn-primary">Update Proposal</button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProposalForm;



