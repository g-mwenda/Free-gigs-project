import React from "react";
import Project from "./Project";

export default function ProjectsList({ projects, onEdit, onDelete }) {
  const projectElements = projects.sort(function(a,b) {
    return new Date(b.due_date) - new Date(a.due_date)
  } ).map((project) => {
    return (
      <Project
        key={project.id}
        project={project}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  });
  return (
    <>
      <div>
        <h3 class="text-center mt-5">Projects</h3>
        <hr></hr>
      </div>
      <div>{projectElements}</div>
    </>
  );
}