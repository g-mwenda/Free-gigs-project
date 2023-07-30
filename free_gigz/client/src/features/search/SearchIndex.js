import React, { useEffect, useState } from "react";
import SearchFilter from "./components/SearchFilter";
import SearchResultList from "./components/SearchResultList";
import "./assets/search.css";

export default function SearchIndex({ user }) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((results) => setResults(results));
      }
    });
  }, []);

  function handleSearch(searchInput) {
    setSearch(searchInput);
  }

  // Possibly add in functionality to filter out own user profile
  // const searchResults = results.filter((result) => result.id !== user.id);

  const filteredResults = results.filter((result) =>
    result.username.includes(search)
  );

  return (
    <>
      <h1 className="page-header">Search</h1>
      <SearchFilter onSearch={handleSearch} />
      <SearchResultList results={filteredResults} />
    </>
  );
}
