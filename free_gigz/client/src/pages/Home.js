import React from "react";
import { useUser } from "../components/App";

export default function Home() {
  const user = useUser();

  return (
    <div class="text-center h-100 my-auto text-middle">
      <h1 class="page-header mb-0">Welcome, {user.username}</h1>
      <h3>to the Stahl Freelancing Platform</h3>
      <h4 class="m-5 fst-normal">You can utilize this space as a platform to sell your skills, look for outside talent(s) to comlete your projects, and explore the possibilities of the gig economy.</h4>
      <h4 class="fst-normal">Head over to the Postings page to get started!</h4>
      {/* <h5>Your Future Is In Your Hands</h5> */}
    </div>
  )
}