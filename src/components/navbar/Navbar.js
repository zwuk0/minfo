import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav">
      <a href="#homepage" className="nav__links">
        {" "}
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix-logo"
          className="nav__logo"
          width={"100"}
          height={"fit-content"}
        />
      </a>
      <a href="#homepage" className="nav__links">
        {" "}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix-avatar"
          className="nav__avatar"
          width={"50"}
          height={"fit-content"}
        />
      </a>
    </div>
  );
}

export default Navbar;
