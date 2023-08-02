import React, { useState, useEffect } from "react";

export default function CompletedForm() {
  const [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => {
    fetch("/completed_projects") // Replace with the actual endpoint for fetching completed projects
      .then((response) => response.json())
      .then((data) => setCompletedProjects(data))
      .catch((error) => console.error("Error fetching completed projects:", error));
  }, []);

  return (
    <div>
      <h2>Completed Projects</h2>
      <ul>
        {completedProjects.map((project) => (
          <li key={project.id}>
            <strong>Title:</strong> {project.title}, <strong>Description:</strong> {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
