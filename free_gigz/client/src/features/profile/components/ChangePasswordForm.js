import React from "react";
import Error from "../../../components/Error";
import { useSystemMode } from "../../../SystemModeContext";

export default function ChangePasswordForm({
  password,
  passwordConfirmation,
  onSubmit,
  onChange,
  passwordErrors,
}) {
  const systemMode = useSystemMode();

  return (
    <form class="form-formatting mt-5">
      <h4 class="text-center mb-2">Change Your Password</h4>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          placeholder="password"
        />
        <label
          for="floatingPassword"
          class={`text-colors-${systemMode.toLowerCase()}`}
        >
          Password
        </label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPasswordConfirmation"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => onChange(e)}
          placeholder="password"
        />
        <label
          for="floatingPasswordConfirmation"
          class={`text-colors-${systemMode.toLowerCase()}`}
        >
          Password Confirmation
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
      {passwordErrors.map((error) => (
        <Error key={error} error={error}></Error>
      ))}
    </form>
  );
}