import React from "react";
import { CgSun } from "react-icons/cg";
import { RiMoonClearLine } from "react-icons/ri";
import "./Toggle.css";

const Toggle = () => {
  
  const setDarkToggle = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightToggle = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkToggle();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setLightToggle();
    else setDarkToggle();
  };
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
        id="toggler"
        onChange={toggleTheme}
        defaultChecked={selectedTheme==="light"}
      />
      <label className="toggle_label" htmlFor="toggler">
        <div className="icons">
          <CgSun className="sun" />
          <RiMoonClearLine className="moon" />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
