import React, { useState, useEffect } from "react";
import LogoLink from "./LogoLink";
import SearchBarInput from "./SearchBarInput";
import SettingsButton from "./SettingsButton";

import "../styles/HeaderBox.css";

function HeaderBar(props) {
  const {
    state,
    setState,
  } = props
  return (
    <header className="HeaderBox" >
      <LogoLink />
      <span className="SeachLabelWrapper">
        <h3 className="SearchLabel">Search </h3>
        <h3 className="SearchLabel">Hacker News</h3>
      </span>
      <SearchBarInput
        state={state}
        setState={setState}
      />
      <SettingsButton />
    </header>
  );
}

export default HeaderBar;
