import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav nav-black">
      <div className="nav__contents">
        {/* to be changed later to minfo logo */}
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix-logo"
          className="nav__logo"
          width={"100"}
          height={"fit-content"}
        />
        {/* nav-link to be added later */}
        {/* to be changet later to ham-menu */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix-avatar"
          className="nav__avatar"
          width={"40"}
          height={"fit-content"}
        />
      </div>
    </div>
  );
}

export default Navbar;
