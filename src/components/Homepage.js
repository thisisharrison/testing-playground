import React from "react";

export default function Homepage() {
  return (
    <div className="homepage">
      <h3>Please go to the URL for one of the examples:</h3>
      <ul>
        <li>
          <a href="/date-counter-3">Date Counter v3</a>
        </li>
        <li>
          <a href="/date-counter-4">Date Counter v4</a>
        </li>
        <li>
          <a href="/controlled-switch">Controlled Switch</a>
        </li>
        <li>
          <a href="/uncontrolled-switch">Uncontrolled Switch</a>
        </li>
        <li>
          <a href="/context">Context</a>
        </li>
        <li>
          <a href="/msw">Server</a>
        </li>
        {/* <li>
          <a href="/redux">Redux</a>
        </li>
        <li>
          <a href="/saga">Saga</a>
        </li> */}
      </ul>
    </div>
  );
}
