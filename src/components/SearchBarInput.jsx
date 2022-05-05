import React, { useState, useEffect } from "react";

import "../styles/SearchBarInput.css";

function SearchBarInput(props) {
  const {
    state,
    setState,
  } = props
  console.log(state)


  return (
    <div className="SearchBarWrapper">
      <span className="SearchIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FF742B"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
        </svg>
      </span>
      <input
        className="SearchInput"
        type={"search"}
        placeholder={"Search stories by title, url or author"}
        onChange={e => setState(e.target.value)}
      ></input>
      <span className="PoweredBy">
        <span id="PoweredByText">
          Search by{" "}
          <img
            className="PoweredByImg"
            src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg"
            alt="Algolia Logo"
          />
        </span>
      </span>
    </div>
  );
}

export default SearchBarInput;
