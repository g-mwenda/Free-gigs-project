import React from "react";
import { useSystemMode } from "../../../SystemModeContext";

export default function SearchFilterBootstrap({ searchValue, onSearch }) {
  const systemMode = useSystemMode();

  return (
    <>
      <div class="w-100 mx-auto">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Type your search here..."
            value={searchValue}
            onChange={(e) => {onSearch(e.target.value)}}
          />
          <label
            for="floatingInput"
            className={`text-colors-${systemMode.toLowerCase()}`}
          >
            Search
          </label>
        </div>
      </div>
    </>
  );
}
