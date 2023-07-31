import React from "react";
import { useSystemMode } from "../../../SystemModeContext";
import moment from "moment";

export default function SearchResultBootstrap({ result }) {
  const systemMode = useSystemMode();

  let freelancerCategories = [];
  let freelancerPostings = [];
  let buyerCategories = [];
  let buyerPostings = [];

  result.postings.forEach((posting) => {
    if (posting.posting_type === "Freelancer") {
      freelancerPostings.push(posting);
      freelancerCategories.push(...posting.categories);
    } else {
      buyerPostings.push(posting);
      buyerCategories.push(...posting.categories);
    }
  });

  return (
    <div class="card mx-auto mb-3 text-center w-45" style={{ width: "18rem" }}>
      <div class={`card-header text-white colors-${systemMode.toLowerCase()}`}>
        <h5 class="card-title fw-bold">{result.username}</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title mb-3">
          {buyerPostings.length}
          {" Buyer "}
          {buyerPostings.length === 1 ? "Posting" : "Postings"}
          {" • "}
          {freelancerPostings.length}
          {" Freelancer "}
          {freelancerPostings.length === 1 ? "Posting" : "Postings"}
        </h5>
        {freelancerCategories.length > 0 ? (
          <div>
            <p class="card-text text-colors-freelancer font-weight-bold">
              Freelancing Specialties
            </p>
            <p class="card-text">{freelancerCategories.join(" • ")}</p>
          </div>
        ) : null}
        {buyerCategories.length > 0 ? (
          <div>
            <p class="card-text mt-2 text-colors-buyer font-italic">
              Buyer Needs
            </p>
            <p class="card-text">{buyerCategories.join(" • ")}</p>
          </div>
        ) : null}
      </div>
      <div class="card-footer text-muted colors-grey">
        Member Since {moment(result.created_at).format("MMM DD, YYYY")}
      </div>
    </div>
  );
}
