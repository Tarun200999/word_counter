import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-default nav1">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Word Counter
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li className="link">
            <a href="https://www.linkedin.com/in/tarun-459a68171/" target="_blank">Tarun</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
