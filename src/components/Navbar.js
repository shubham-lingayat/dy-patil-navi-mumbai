import React from "react";

function Navbar() {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="topnav">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a className="navbar-brand" href={url}>
                  <img
                    className="lazyload mainlogo"
                    alt="D.Y. Patil"
                    src="./images/logo.png"
                  />
                </a>
              </div>
              <div className="col-md-9">
                <div
                  className="collapse navbar-collapse w-100 py-1 justify-content-end"
                  id="navbarResponsive"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#heroSection">
                        Home
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="#mitid">
                        About DY Patil
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#programs">
                        Programs
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#admission">
                        Admission Process
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#inspiration">
                        Get Inspired
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#placement">
                        Placement
                      </a>
                    </li>
                    <li className="nav-item">
                      <button
                        className="enquire-button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        APPLY NOW
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="w-100 d-lg-none">
          <a className="navbar-brand pl-2 d-lg-none d-inline-block" href={url}>
            <img
              alt="D. Y. Patil University"
              src="./images/logo.png"
              className="img-fluid lazyload navtoggle"
            />
          </a>

          <button
            id="nav-btn"
            className="navbar-toggler navbar-toggler-right float-right togglebtn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDiv"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarDiv">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#heroSection">
                  Home
                </a>
              </li>

              <li>
                <a className="nav-link" href="#mitid">
                  About DY Patil
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#programs">
                  Programs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#admission">
                  Admission Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#inspiration">
                  Get Inspired
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#placement">
                  Placement
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="enquire-button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  APPLY NOW
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
