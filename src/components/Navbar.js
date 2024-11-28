import React from "react";
import "./Navbar.css";

function Navbar() {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <header>
      <div className="container-fluid h_nav sticky-top">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg  navbar-light p-lg-0">
            <a href={url} className="navbar-brand">
              <img
                src={`${url}images/logo/3.png`}
                className="hero_logo_01"
                loading="lazy"
                alt="img not found"
              />
              <img
                src={`${url}images/logo/naac.png`}
                className="hero_logo_02"
                loading="lazy"
                alt="img not found"
              />
            </a>
            <a
              href="#none"
              className="btn c_btn fw-normal btn_font d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enquire Now
            </a>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center align-items-center"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <a href={url} className="nav-item nav-link active">
                  Home
                </a>
                <a href="#about-us" className="nav-item nav-link">
                  About Us
                </a>
                <a href="#why-us" className="nav-item nav-link">
                  Why Choose Us
                </a>
                <a href="#Program" className="nav-item nav-link">
                  Programs
                </a>
                <a href="#admission-process" className="nav-item nav-link">
                  Admission Process
                </a>
                <a href="#testimonials" className="nav-item nav-link d-none">
                  Testimonials
                </a>
                <a href="#recruters" className="nav-item nav-link">
                  Placement
                </a>
              </div>
            </div>
            <div className="d-lg-block d-none">
              <a
                href="#none"
                className="btn c_btn py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enquire Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
