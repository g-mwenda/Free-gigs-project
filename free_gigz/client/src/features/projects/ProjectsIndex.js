import React, { useState } from "react";
import { useUser } from "../../components/App";
import { useSystemMode } from "../../SystemModeContext";
import ProjectsList from "./components/ProjectsList";
import ProjectForm from "./components/ProjectForm";

export default function ProjectsIndex() {
  const user = useUser();
  const systemMode = useSystemMode();

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [fetchMethod, setFetchMethod] = useState("");

  const [buyerProjects, setBuyerProjects] = useState(user.buyer.projects);
  const [freelancerProjects, setFreelancerProjects] = useState(
    user.freelancer.projects
  );

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function toggleProjectForm() {
    scrollToTop();
    setShowProjectForm(!showProjectForm);
    setCurrentProject(null);
    setErrors([]);
    setFetchMethod("POST");
  }

  function handleEditClick(selectedProject) {
    scrollToTop();
    setShowProjectForm(true);
    setCurrentProject(selectedProject);
    setFetchMethod("PATCH");
  }

  function handleCancel() {
    setShowProjectForm(false);
    setCurrentProject(null);
  }

  function handleFormSubmission(project) {
    setErrors([]);
    let fetchPathEnding = "";

    if (fetchMethod === "PATCH") {
      fetchPathEnding = `/${currentProject.id}`;
    }

    fetch(`/projects${fetchPathEnding}`, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({ ...project }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          if (fetchMethod === "POST") {
            if (systemMode === "Freelancer") {
              setFreelancerProjects([data, ...freelancerProjects]);
            } else {
              setBuyerProjects([data, ...buyerProjects]);
            }
          } else if (fetchMethod === "PATCH") {
            if (systemMode === "Freelancer") {
              setFreelancerProjects(
                freelancerProjects.map((selectedProject) => {
                  if (selectedProject.id === currentProject.id) {
                    return { id: currentProject.id, ...data };
                  }
                  return selectedProject;
                })
              );
            } else {
              setBuyerProjects(
                buyerProjects.map((selectedProject) => {
                  if (selectedProject.id === currentProject.id) {
                    return { id: currentProject.id, ...data };
                  }
                  return selectedProject;
                })
              );
            }
          }
          toggleProjectForm();
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleDelete(deletedProject) {
    fetch(`/projects/${deletedProject.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        if (systemMode === "Freelancer") {
          const filteredProjects = freelancerProjects.filter(
            (project) => project.id !== deletedProject.id
          );
          setFreelancerProjects(filteredProjects);
        } else {
          const filteredProjects = buyerProjects.filter(
            (project) => project.id !== deletedProject.id
          );
          setBuyerProjects(filteredProjects);
        }
      }
    });
  }

  return (
    <>
      <h1 className="page-header">Your {systemMode} Projects</h1>
      <div class="text-center">
        <button
          type="button"
          onClick={toggleProjectForm}
          class={`btn fs-4 inverse-button-colors-${systemMode.toLowerCase()} ${systemMode.toLowerCase()}- colors-${systemMode.toLowerCase()}`}
        >
          Show Projects Form
        </button>
      </div>
      {showProjectForm ? (
        <ProjectForm
          project={currentProject}
          onSubmit={handleFormSubmission}
          onCancel={handleCancel}
          errors={errors}
        />
      ) : null}
      <ProjectsList
        projects={
          systemMode === "Freelancer" ? freelancerProjects : buyerProjects
        }
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
    </>
  );
}
