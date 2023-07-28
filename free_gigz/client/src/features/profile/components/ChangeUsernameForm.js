import React from "react";
import Error from "../../../components/Error";
import { useSystemMode } from "../../../SystemModeContext";

export default function ChangeUsernameForm({
  username,
  onSubmit,
  onChange,
  usernameErrors,
}) {
  const systemMode = useSystemMode();

  return (
    <form class="form-formatting">
      <h4 class="text-center mb-2">Change Your Username</h4>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingUsername"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
          placeholder="username"
        />
        <label
          for="floatingUsername"
          class={`text-colors-${systemMode.toLowerCase()}`}
        >
          Username
        </label>
      </div>
      <div class="text-center">
        <button
          onClick={() => onSubmit()}
          class={`btn mt-3 colors-${systemMode.toLowerCase()} inverse-button-colors-${systemMode.toLowerCase()} fs-6 text`}
          type="button"
        >
          Submit
        </button>
      </div>
      {usernameErrors.map((error) => (
        <Error key={error} error={error}></Error>
      ))}
    </form>
  );
}