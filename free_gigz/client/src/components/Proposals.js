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

// import React, { useState, useEffect } from 'react';
// import NavbarComponent from './NavbarComponent';

// function Proposals() {
//   const [proposals, setProposals] = useState([]);

//   useEffect(() => {
//     fetch('/proposals')
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   return (
//     <div className="container mt-5">
//       <NavbarComponent />
//       <h2 className="mb-4">Proposals</h2>
//       <div className="row">
//         {proposals.map((proposal) => (
//           <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <div className="proposalcard">
//               <div className="proposalcard-image">
//               {/* <div className="proposalcard-description">
//                 <h3 className="proposaltext-title">Proposal ID: {proposal.id}</h3>
//               </div> */}
//               <p className="proposaltext-body">Job Listing ID: {proposal.job_listing_id}</p>
//                 <p className="jobtext-body">Freelancer: {proposal.freelancer.name}</p>
//                 <p className="jobtext-body">Project Details: {proposal.project_details}</p>
//                 <p className="proposaltext-body">Cost Estimate: {proposal.cost_estimate}</p>
//                 <p className="proposaltext-body">Timeline: {proposal.timeline}</p>
//                 {/* <p className="jobtext-body">Client: {proposal.job_listing.client.company_name}</p> */}
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;

// Works ok
// import React, { useState, useEffect } from 'react';
// import NavbarComponent from './NavbarComponent';

// function Proposals() {
//   const [proposals, setProposals] = useState([]);

//   useEffect(() => {
//     fetch('/proposals')
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     // Implement your logic for accepting a proposal
//     console.log(`Proposal ${proposalId} accepted`);
//   };

//   const handleReject = (proposalId) => {
//     // Implement your logic for rejecting a proposal
//     console.log(`Proposal ${proposalId} rejected`);
//   };

//   return (
//     <div className="container mt-5">
//       <NavbarComponent />
//       <h2 className="mb-4">Proposals</h2>
//       <div className="row">
//         {proposals.map((proposal) => (
//           <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//             <div className="proposalcard">
//               <div className="proposalcard-image">
//                 <p className="proposaltext-body">Job Listing ID: {proposal.job_listing_id}</p>
//                 <p className="jobtext-body">Freelancer: {proposal.freelancer.name}</p>
//                 <p className="jobtext-body">Project Details: {proposal.project_details}</p>
//                 <p className="proposaltext-body">Cost Estimate: {proposal.cost_estimate}</p>
//                 <p className="proposaltext-body">Timeline: {proposal.timeline}</p>
//                 <button
//                   className="btn btn-success"
//                   onClick={() => handleAccept(proposal.id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="btn btn-danger ml-2"
//                   onClick={() => handleReject(proposal.id)}
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;

// Works- has styling
// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import UpdateProposalForm from './UpdateProposalForm';
// import proposals from "../styles/proposal.css"

// function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const { current_user } = useContext(AuthContext);
//   const [showUpdateProposalForm,setUpdateProposalForm] = useState(false);

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     // Implement your logic for accepting a proposal
//     console.log(`Proposal ${proposalId} accepted`);
//   };

//   const handleReject = (proposalId) => {
//     // Implement your logic for rejecting a proposal
//     console.log(`Proposal ${proposalId} rejected`);
//   };

//   // const handleEdit = (proposalId) => {
//   //   // Implement your logic for editing a proposal
//   //   console.log(`Editing proposal ${proposalId}`);
//   // };

//   // const handleDelete = (proposalId) => {
//   //   // Implement your logic for deleting a proposal
//   //   console.log(`Deleting proposal ${proposalId}`);
//   // };
//   const handleEdit = (proposalId) => {
//     // Implement your logic for editing a proposal
//     console.log(`Editing proposal ${proposalId}`);
//     setUpdateProposalForm(true);
    
//     // Example of how to make a fetch request for editing
//   //   fetch(`/proposals/${proposalId}`, {
//   //     method: 'PATCHhh', // Use 'PUT' method for updating
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({ /* Your updated proposal data */ }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((updatedProposal) => {
//   //       // Update the proposals state with the updated proposal data
//   //       setProposals((prevProposals) => (
//   //         prevProposals.map((proposal) =>
//   //           proposal.id === updatedProposal.id ? updatedProposal : proposal
//   //         )
//   //       ));
//   //     })
//   //     .catch((error) => console.error('Error editing proposal:', error));
//    };

//   const handleDelete = (proposalId) => {
//     // Implement your logic for deleting a proposal
//     console.log(`Deleting proposal ${proposalId}`);
    
//     // Example of how to make a fetch request for deleting
//     fetch(`/proposals/${proposalId}`, {
//       method: 'DELET', // Use 'DELETE' method for deletion
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Remove the deleted proposal from the proposals state
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
//                 {current_user && current_user.role === "client" && (
//                   <>
//                   <button
//                     className="custom-card-button btn btn-success"
//                     onClick={() => handleAccept(proposal.id)}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     className="custom-card-button btn btn-danger"
//                     onClick={() => handleReject(proposal.id)}
//                   >
//                     Reject
//                   </button>
//                   </>
//                   )}
                  
//                   {current_user && current_user.role === "freelancer" && (
//                     <>
//                   <button
//                     className="custom-card-button btn btn-primary"
//                     onClick={() => handleEdit(proposal.id)}
//                   >
//                     Edit
//                   </button>
//                   {showUpdateProposalForm && <UpdateProposalForm proposal={proposal} onclose={() => setUpdateProposalForm(false)} />}
//                   <button
//                     className="custom-card-button btn btn-secondary"
//                     onClick={() => handleDelete(proposal.id)}
//                   >
//                     Delete
//                   </button>
//                   </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;


// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import UpdateProposalForm from './UpdateProposalForm';
// import proposals from "../styles/proposal.css";

// function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const { current_user } = useContext(AuthContext);
//   const [showUpdateProposalForm, setUpdateProposalForm] = useState(false);

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     console.log(`Proposal ${proposalId} accepted`);
//     // Implement your logic for accepting a proposal
//   };

//   const handleReject = (proposalId) => {
//     console.log(`Proposal ${proposalId} rejected`);
//     // Implement your logic for rejecting a proposal
//   };

//   const handleEdit = (proposalId) => {
//     console.log(`Editing proposal ${proposalId}`);
//     setUpdateProposalForm(true);
//     // Implement your logic for editing a proposal
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
//     <div>
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
//                       <button
//                         className="custom-card-button btn btn-primary"
//                         onClick={() => handleEdit(proposal.id)}
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="custom-card-button btn btn-secondary"
//                         onClick={() => handleDelete(proposal.id)}
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}

//                 </div>
//                 <div>
//                 {showUpdateProposalForm && <UpdateProposalForm proposal={proposal} onClose={() => setUpdateProposalForm(false)} />}
//                 </div>

//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Proposals;

// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import UpdateProposalForm from './UpdateProposalForm';
// import proposals from "../styles/proposal.css";

// function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const { current_user } = useContext(AuthContext);
//   const [showUpdateProposalForm, setUpdateProposalForm] = useState(false);
//   const [selectedProposalId, setSelectedProposalId] = useState(null);

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     console.log(`Proposal ${proposalId} accepted`);
//     // Implement your logic for accepting a proposal
//   };

//   const handleReject = (proposalId) => {
//     console.log(`Proposal ${proposalId} rejected`);
//     // Implement your logic for rejecting a proposal
//   };

//   const handleEdit = (proposalId) => {
//     console.log(`Editing proposal ${proposalId}`);
//     setUpdateProposalForm(true);
//     setSelectedProposalId(proposalId);
//     // Implement your logic for editing a proposal
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
//                       {proposal.freelancer.id === current_user.id && (
//                         <>
//                         <button
//                           className="custom-card-button btn btn-primary"
//                           onClick={() => handleEdit(proposal.id)}
//                         >
//                           Edit
//                         </button>
//                         <button
//                         className="custom-card-button btn btn-secondary"
//                         onClick={() => handleDelete(proposal.id)}
//                       >
//                         Delete
//                       </button>
//                         </>
//                       )}

                      
//                     </>
//                   )}
//                 </div>
//                 {showUpdateProposalForm && selectedProposalId === proposal.id && (
//                   <div className="update-proposal-overlay">
//                     <UpdateProposalForm proposal={proposal} onClose={() => {
//                       setUpdateProposalForm(false);
//                       setSelectedProposalId(null);
//                     }} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;





// validates user to be theone that created the post, but doesnt allow any of the buttons to be used
// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import UpdateProposalForm from './UpdateProposalForm';
// import proposals from "../styles/proposal.css";

// function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const { current_user } = useContext(AuthContext);
//   const [showUpdateProposalForm, setUpdateProposalForm] = useState(false);

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     console.log(`Proposal ${proposalId} accepted`);
//     // Implement your logic for accepting a proposal
//   };

//   const handleReject = (proposalId) => {
//     console.log(`Proposal ${proposalId} rejected`);
//     // Implement your logic for rejecting a proposal
//   };

//   const handleEdit = (proposalId, freelancerId) => {
//     console.log(`Editing proposal ${proposalId}`);
//     if (current_user.id === freelancerId) {
//       setUpdateProposalForm(true);
//     } else {
//       console.log("You are not authorized to edit this proposal.");
//     }
//     // Implement your logic for editing a proposal
//   };

//   const handleDelete = (proposalId, freelancerId) => {
//     console.log(`Deleting proposal ${proposalId}`);
//     if (current_user.id === freelancerId) {
//       fetch(`/proposals/${proposalId}`, {
//         method: 'DELETE',
//       })
//         .then((response) => {
//           if (response.ok) {
//             setProposals((prevProposals) => (
//               prevProposals.filter((proposal) => proposal.id !== proposalId)
//             ));
//           } else {
//             throw new Error('Failed to delete proposal');
//           }
//         })
//         .catch((error) => console.error('Error deleting proposal:', error));
//     } else {
//       console.log("You are not authorized to delete this proposal.");
//     }
//     // Implement your logic for deleting a proposal
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
//                       <button
//                         className="custom-card-button btn btn-primary"
//                         onClick={() => handleEdit(proposal.id, proposal.freelancer.id)}
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="custom-card-button btn btn-secondary"
//                         onClick={() => handleDelete(proposal.id, proposal.freelancer.id)}
//                       >
//                         Delete
//                       </button>
//                     </>
//                   )}

//                 </div>
//                 {showUpdateProposalForm && (
//                   <div className="update-proposal-overlay">
//                     <UpdateProposalForm proposal={proposal} onClose={() => setUpdateProposalForm(false)} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;

// import React, { useState, useEffect, useContext } from 'react';
// import NavbarComponent from './NavbarComponent';
// import { AuthContext } from "../context/AuthContext";
// import UpdateProposalForm from './UpdateProposalForm';
// import proposals from "../styles/proposal.css";

// function Proposals() {
//   const [proposals, setProposals] = useState([]);
//   const { current_user } = useContext(AuthContext);
//   const [showUpdateProposalForm, setUpdateProposalForm] = useState(false);
//   const [selectedProposalId, setSelectedProposalId] = useState(null);

//   useEffect(() => {
//     fetch(`/proposals`)
//       .then((response) => response.json())
//       .then((data) => setProposals(data))
//       .catch((error) => console.error('Error fetching proposal listings:', error));
//   }, []);

//   const handleAccept = (proposalId) => {
//     console.log(`Proposal ${proposalId} accepted`);
//     // Implement your logic for accepting a proposal
//   };

//   const handleReject = (proposalId) => {
//     console.log(`Proposal ${proposalId} rejected`);
//     // Implement your logic for rejecting a proposal
//   };

//   const handleEdit = (proposalId) => {
//     console.log(`Editing proposal ${proposalId}`);
//     setUpdateProposalForm(true);
//     setSelectedProposalId(proposalId);
//     // Implement your logic for editing a proposal
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
//                             onClick={() => handleEdit(proposal.id)}
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
//                 {showUpdateProposalForm && selectedProposalId === proposal.id && (
//                   <div className="update-proposal-overlay">
//                     <UpdateProposalForm proposal={proposal} onClose={() => {
//                       setUpdateProposalForm(false);
//                       setSelectedProposalId(null);
//                     }} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proposals;
import React, { useState, useEffect, useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import proposals from "../styles/proposal.css";

function Proposals() {
  const [proposals, setProposals] = useState([]);
  const { current_user } = useContext(AuthContext);
  const [selectedProposalId, setSelectedProposalId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/proposals`)
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposal listings:', error));
  }, []);

  const handleAccept = (proposalId) => {
    console.log(`Proposal ${proposalId} accepted`);
    // Implement your logic for accepting a proposal
  };

  const handleReject = (proposalId) => {
    console.log(`Proposal ${proposalId} rejected`);
    // Implement your logic for rejecting a proposal
  };

  const handleEdit = (proposalId) => {
    console.log(`Editing proposal ${proposalId}`);
    setSelectedProposalId(proposalId);
    // Use the useNavigate hook to navigate to the UpdateProposalForm component
    // You should have a proper route set up for UpdateProposalForm in your router configuration
    navigate(`/updateproposal/${proposalId}`);
  };

  const handleDelete = (proposalId) => {
    console.log(`Deleting proposal ${proposalId}`);
    // Implement your logic for deleting a proposal
    fetch(`/updateproposals/${proposalId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setProposals((prevProposals) => (
            prevProposals.filter((proposal) => proposal.id !== proposalId)
          ));
        } else {
          throw new Error('Failed to delete proposal');
        }
      })
      .catch((error) => console.error('Error deleting proposal:', error));
  };

  return (
    <div className="container mt-5">
      <NavbarComponent />
      <h2 className="mb-4">Proposals</h2>
      <div className="row">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="custom-card proposalcard">
              <div className="custom-card-details proposalcard-image">
                <p className="custom-text-body">Job Listing ID: {proposal.job_listing_id}</p>
                <p className="custom-text-body">Freelancer: {proposal.freelancer.name}</p>
                <p className="custom-text-body">Project Details: {proposal.project_details}</p>
                <p className="custom-text-body">Cost Estimate: {proposal.cost_estimate}</p>
                <p className="custom-text-body">Timeline: {proposal.timeline}</p>
                <div className="custom-card-buttons">
                  {current_user && current_user.role === "client" && (
                    <>
                      <button
                        className="custom-card-button btn btn-success"
                        onClick={() => handleAccept(proposal.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="custom-card-button btn btn-danger"
                        onClick={() => handleReject(proposal.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {current_user && current_user.role === "freelancer" && (
                    <>
                      {proposal.freelancer.id === current_user.user_id && (
                        <>
                          <button
                            className="custom-card-button btn btn-primary"
                            onClick={() => handleEdit(proposal.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="custom-card-button btn btn-secondary"
                            onClick={() => handleDelete(proposal.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proposals;


