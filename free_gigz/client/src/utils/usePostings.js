import React, { useEffect, useState } from "react";

export default function usePostings() {
  const [postings, setPostings] = useState([]);
  
  useEffect(() => {
    fetch("/postings").then((r) => {
      if (r.ok) {
        r.json().then((postings) => setPostings(postings));
      }
    });
  }, []);

  return postings;
}
