import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg pt-3 pb-3">
        <div className="container ps-5">
          <Link className="navbar-brand text-white fw-bold text-black-50 fs-4" to="/">Walid Elhamzaoui</Link>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div >
         
          </div>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-5 pe-3" >
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="skills">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="projects">Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white-50" to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
