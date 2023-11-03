import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg pt-3 pb-3">
        <div className="container ps-5">
          <Link className="navbar-brand text-white fw-bold text-black-50 fs-4" to="/">Walid Elhamzaoui</Link>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label=" navigation">
            <span   className="navbar-toggler-icon"></span>
            <svg   xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className=" toggler bi bi-x-lg mb-1" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
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
