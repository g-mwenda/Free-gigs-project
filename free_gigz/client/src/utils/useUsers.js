import React, { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((users) => setUsers(users));
      }
    });
  }, []);

  return users;
}
