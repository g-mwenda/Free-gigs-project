import React from "react";
import Posting from "./Posting";

export default function PostingList({ postings, onEdit, onDelete }) {
  const postingElements = postings.map((posting) => {
    return (
      <Posting
        key={posting.id}
        posting={posting}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  });

  return <div className="posting-list__div">{postingElements}</div>;
}
