import React from "react";
import { useSystemMode } from "../../../SystemModeContext";
import moment from "moment";
import voca from "voca"

export default function Project({ project, onEdit, onDelete }) {
  const is_in_past = Date.parse(project.due_date) < Date.parse(new Date());
  const systemMode = useSystemMode();
  return (
    <div class="card text-center w-50 d-flex mx-auto mb-4">
      <div
        class={`card-header fw-bold text-uppercase ${
          is_in_past ? "colors-grey" : `colors-${systemMode.toLowerCase()}`
        }`}
      >
        {voca.titleCase(project.posting_title)}
      </div>
      <div class="card-body d-flex flex-column">
        <p class="card-text">
          {is_in_past ? "Worked" : "Working"} with{" "}
          {systemMode === "Freelancer"
            ? project.buyer_username
            : project.freelancer_username}
        </p>
        <p class="card-text">
          {systemMode === "Freelancer" ? "Price" : "Cost"} - $
          {project.cost.toLocaleString("en-US")}
        </p>
        <p class="card-text fw-bold">
          {is_in_past ? "Finished" : "Due"}:{" "}
          {moment(project.due_date).format("MM/DD/YYYY HH:MM")}
        </p>
      </div>
      <div class="card-footer text-muted">
        {!is_in_past ? (
          <form class="container-fluid justify-content-start">
            <button
              onClick={() => onEdit(project)}
              class="btn btn-primary me-3"
              type="button"
            >
              Edit
            </button>
            <button
              class="btn btn-danger"
              type="button"
              onClick={() => onDelete(project)}
            >
              Delete
            </button>
          </form>
        ) : <h5 class="text-center fst-italic">Completed</h5>}
      </div>
    </div>
  );
}
