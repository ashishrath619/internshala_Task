import React from "react";
import "./Nabar.css";
import Card from "./Card";
import Avatar from "@material-ui/core/Avatar";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav_logo_section">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQFV_r6wFWi6Nw/company-logo_200_200/0/1573211567330?e=2159024400&v=beta&t=hdUOo92NqFq_NlCX0PWohHdBb2WODOMr9BsbrGSvbAM"
            alt=" company logo "
          />
          <h4> Task Board </h4>
        </div>
        <Avatar
          style={{ marginTop: "0.5rem" }}
          alt="Cindy Baker"
          src="https://picsum.photos/200"
        />
      </nav>
    </>
  );
}

export default Navbar;
