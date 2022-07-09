import React from "react";
import "./topBar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Pravesh Admin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gji_wB4Swi7efLPSuAvVUERZmv5RwN9t_vzjr8llg=s360-p-rw-no"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
