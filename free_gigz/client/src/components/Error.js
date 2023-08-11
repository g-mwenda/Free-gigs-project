
function handleSubmit(e) {
  e.preventDefault();
  
  fetch("/signup", {
    method: "POST",
    headers: {
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      password_confirmation: passwordConfirmation,
    }),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => onLogin(user));
    } else {
      console.log("Fail")
    }
  });
}