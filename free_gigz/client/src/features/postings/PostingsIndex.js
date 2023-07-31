import React, { useState } from "react";
import PostingList from "./components/PostingList";
import PostingForm from "./components/PostingForm";
import { useSystemMode } from "../../SystemModeContext";
import "./assets/postings.css";
import { useUser } from "../../components/App";

export default function PostingsIndex() {
  const user = useUser();

  const [showPostingForm, setShowPostingForm] = useState(false);
  const [currentPosting, setCurrentPosting] = useState(null);
  const [fetchMethod, setFetchMethod] = useState("");
  const [postings, setPostings] = useState(
    user.postings.sort(function(a, b) { return new Date(b.updated_at) - new Date(a.updated_at)})
  );
  const [errors, setErrors] = useState([]);

  const systemMode = useSystemMode();

  function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  function togglePostingForm() {
    scrollToTop()
    setShowPostingForm(!showPostingForm);
    setCurrentPosting(null);
    setErrors([]);
    setFetchMethod("POST");
  }

  function handleEditClick(selectedPosting) {
    scrollToTop()
    setShowPostingForm(true);
    setCurrentPosting(selectedPosting);
    setFetchMethod("PATCH");
  }

  function handleCancel() {
    setShowPostingForm(false);
    setCurrentPosting(null);
  }

  function handleFormSubmission(posting) {
    setErrors([]);
    let fetchPathEnding = "";

    if (fetchMethod === "PATCH") {
      fetchPathEnding = `/${currentPosting.id}`;
    }

    console.log("Before Submission", posting)
    
    fetch(`/postings${fetchPathEnding}`, {
      method: fetchMethod,
      headers: {
        "CONTENT-TYPE": "application/json",
      },
      body: JSON.stringify({
        ...posting,
        user_id: user.id,
        posting_type: systemMode,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("After Submission", data)
          if (fetchMethod === "POST") {
            setPostings([data, ...postings]);
          } else if (fetchMethod === "PATCH") {
            setPostings(
              postings.map((selectedPosting) => {
                if (selectedPosting.id === currentPosting.id) {
                  return { id: currentPosting.id, ...data };
                } else {
                  return selectedPosting;
                }
              })
            );
          }
          togglePostingForm();
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleDelete(deletedPosting) {
    fetch(`/postings/${deletedPosting.id}`, {
      method: "DELETE",
      headers: {
        "CONTENT-TYPE": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        setPostings(
          postings.filter((posting) => posting.id !== deletedPosting.id)
        );
      }
    });
  }

  const filteredPostsBySiteMode = postings.filter(
    (posting) => posting.posting_type === systemMode
  );

  return (
    <>
      <h1 className="page-header">Your {systemMode} Postings</h1>
      <div class="text-center">
        <button
          type="button"
          onClick={togglePostingForm}
          class={`btn fs-4 inverse-button-colors-${systemMode.toLowerCase()} ${systemMode.toLowerCase()}- colors-${systemMode.toLowerCase()}`}
        >
          Show Posting Form
        </button>
      </div>
      {showPostingForm ? (
        <PostingForm
          posting={currentPosting}
          onCancel={handleCancel}
          onSubmit={handleFormSubmission}
          errors={errors}
        />
      ) : null}
      <PostingList
        postings={filteredPostsBySiteMode}
        onEdit={handleEditClick}
        onDelete={handleDelete}
      />
    </>
  );
}
