import React from "react";


export default function Posting({ posting, onEdit, onDelete }) {
  

  return (
    <>
      <div class="card text-center w-50 d-flex mx-auto mb-4">
        <div
          class={"card-header fw-bold text-uppercase text-white colors"}
        >
          {posting.title}
        </div>
        <div class="card-body d-flex flex-column">
          <p class="card-text">
            {posting.description.split(" ").length > 30
              ? posting.description.split(" ").slice(0, 30).join(" ") + "..."
              : posting.description}
          </p>
          <p class="card-text">
            ${posting.price} • {posting.price_unit}
          </p>
        </div>
        <div class="btn-group card-footer text-muted">
          <form class="container-fluid justify-content-start">
            <button onClick={() => onEdit(posting)} class="btn btn-primary me-3" type="button">
              Edit
            </button>
            <button class="btn btn-danger" type="button" onClick={() => onDelete(posting)}>
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
