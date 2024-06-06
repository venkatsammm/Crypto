import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { blue } from "@mui/material/colors";
import bull from "../../../images/Bull.png"; // Import the bull image

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") != "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

 

  return (
    <div className="header">
  
      <h1 style={{color:"blue", display: "flex", alignItems: "center"}}>
        {/* Add the bull image next to the title */}
        <img src={bull} alt="Bull" style={{ height: "30px", marginRight: "10px" }} />
        <span  style={{color: '#3B82F6'}}>Financial Hub</span>
        <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
  
      <div className="links">
        <Switch checked={darkMode} onClick={() => changeMode()} />
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text={"dashboard"} />
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
