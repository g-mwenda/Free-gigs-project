
import React, { useState, useEffect, useContext } from 'react';
import NavbarComponent from './NavbarComponent';
import { AuthContext } from '../context/AuthContext';
import '../styles/completedproject.css';

export default function CompletedForm() {
  const [completedProjects, setCompletedProjects] = useState([]);
  const [projectReviews, setProjectReviews] = useState({});
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { current_user } = useContext(AuthContext);

  useEffect(() => {
    fetch('/completed_projects')
      .then((response) => response.json())
      .then((data) => setCompletedProjects(data))
      .catch((error) => console.error('Error fetching completed projects:', error));
  }, []);

  useEffect(() => {
    fetch('/review_ratings') // Fetch associated reviews for completed projects
      .then((response) => response.json())
      .then((data) => {
        const reviewsByProjectId = {};
        data.forEach((review) => {
          const projectId = review.completed_project_id;
          reviewsByProjectId[projectId] = review;
        });
        setProjectReviews(reviewsByProjectId);
      })
      .catch((error) => console.error('Error fetching project reviews:', error));
  }, []);

  const handleReviewFormOpen = (projectId) => {
    setSelectedProjectId(projectId);
    setShowReviewForm(true);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async () => {
    if (selectedProjectId !== null) {
      try {
        const response = await fetch('/review_ratings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: completedProjects[selectedProjectId].client_id,
            freelancer_id: completedProjects[selectedProjectId].freelancer_id,
            rating,
            review,
            completed_project_id: completedProjects[selectedProjectId].id,
          }),
        });
  
        if (response.ok) {
          console.log('Review and rating added successfully');
          // You can update the UI or state here if needed
          setShowReviewForm(false);
          setRating(0);
          setReview('');
        } else {
          console.error('Failed to add review and rating.');
          const errorData = await response.json();
          console.error('Error details:', errorData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  const handleDeleteReview = async (projectId) => {
    try {
      const response = await fetch(`/review_ratings/${projectReviews[projectId].id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Review deleted successfully');
        // You can update the UI or state here if needed
      } else {
        console.error('Failed to delete review.');
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="completed-projects-container">
      <NavbarComponent />
      <h2>My Completed Projects</h2>
      <div className="completed-projects-grid">
        {completedProjects.length > 0 ? (
          completedProjects.map((project) => (
            <div key={project.id} className="custom-card">
              <div className="custom-card-details">
                <h4 className="custom-text-body">Job listing id: {project.job_listing_id}</h4>
                <p className="custom-text-body">Freelancer ID: {project.freelancer_id}</p>
                <p className="custom-text-body">Client: {project.client_id}</p>
                <p className="custom-text-body">Completed Date: {project.completed_date}</p>
                <p className="custom-text-body">Status: {project.project_status}</p>
                {projectReviews[project.id] && (
                  <div className="rating-review">
                    <p>Rating: {projectReviews[project.id].rating}</p>
                    <p>Review: {projectReviews[project.id].review}</p>
                  </div>
                )}
                {current_user && current_user.role === 'client' && (
                  <>
                    <button onClick={() => handleReviewFormOpen(project.id)}>
                      {projectReviews[project.id] ? 'Edit Review' : 'Add Review'}
                    </button>
                    {projectReviews[project.id] && (
                      <button onClick={() => handleDeleteReview(project.id)}>Delete Review</button>
                    )}
                  </>
                )}
                {showReviewForm && selectedProjectId === project.id && (
                  <div className="rating-review-form">
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" value={rating} onChange={handleRatingChange} />
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" value={review} onChange={handleReviewChange} />
                    <button onClick={handleReviewSubmit}>Submit Review</button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No completed projects yet.</p>
        )}
      </div>
    </div>
  );
}
