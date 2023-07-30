import React, { useRef } from "react";
import Error from "../../../components/Error";
import { useSystemMode } from "../../../SystemModeContext";

export default function DeleteAccountForm({ onSubmit, deleteAccountErrors }) {
  const systemMode = useSystemMode();
  const deleteFormInputRef = useRef();

  return (
    <form class="form-formatting mt-5 mb-5">
      <h4 class="text-center mb-2">Delete Your Account</h4>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingDelete"
          name="delete"
          ref={deleteFormInputRef}
          placeholder="delete"
        />
        <label
          for="floatingDelete"
          class={`text-colors-${systemMode.toLowerCase()}`}
        >
          Enter Delete in This Box and Click Submit
        </label>
      </div>
      <div class="text-center">
        <button
          onClick={() => onSubmit(deleteFormInputRef.current.value)}
          class={`btn mt-3 btn-danger fs-6 text`}
          type="button"
        >
          Submit
        </button>
      </div>
      {deleteAccountErrors.map((error) => (
        <Error key={error} error={error}></Error>
      ))}
    </form>
  );
}
