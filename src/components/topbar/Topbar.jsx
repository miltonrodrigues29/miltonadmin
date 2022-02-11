import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Miltonadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone></NotificationsNone>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language></Language>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings></Settings>
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/56884655?s=400&u=ad79cca06cc501dd2ef0e17895bf272d0e53f35d&v=4"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
