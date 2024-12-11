import React from "react";

const Programs = ({ data }) => {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <section id="programs" className="programsSection">
      <div className="container center_tagline  mt-lg-3 py-4 mt-lg-0 pt-lg-0">
        {/* <!-- ######## Desktop Section ####### --> */}
        <div className="row d-none d-lg-flex">
          <div className="parentTabs d-flex justify-content-between">
            <h2>
              Our <span className="textBrown"> Programs</span>{" "}
            </h2>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Undergraduate Program
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Postgraduate Programs
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content childTabs" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/* <!-- Tabs --> */}
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {/* Map Function Start - UG */}
                {ug.map((value, index) => {
                  <div className="col-lg-4">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`redirectBtn nav-link ${
                          value["id"] === "tab1" ? "active" : ""
                        }`}
                        id={`${value["id"]}`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${value["tragetId"]}`}
                        type="button"
                        role="tab"
                        aria-controls={`#${value["tragetId"]}`}
                        aria-selected={`${
                          value["id"] === "tab1" ? "true" : "false"
                        }`}
                      >
                        <div className="iconContainer">
                          <img
                            src={`${url}images/dypatil/icons/${value["imgSrc"]}`}
                            alt=""
                          />
                        </div>
                        {value["course"]}
                      </button>
                    </li>
                  </div>;
                })}
                {/* Map Function END - UG */}
              </ul>
              <div id="subChildUG"></div>

              <div
                className="tab-content SubChildTabContent"
                id="myTabContent2"
              >
                {/* Map Function START */}
                {ug.map((value, index) => {
                  <div
                    className={`tab-pane fade ${
                      value["id"] === "tab1" ? "show active" : ""
                    }`}
                    id={`${value["targetId"]}`}
                    role="tabpanel"
                    aria-labelledby={`${value["id"]}`}
                  >
                    {tabContent.map((content, index) => (
                      <div className="row" key={index}>
                        <h2>
                          {content.heading1}{" "}
                          <span className="textBrown">{content.heading2}</span>
                        </h2>

                        <div className="accordion" id={`accordion-${tabId}`}>
                          {/* Overview */}
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              id={`heading-${tabId}-1`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${tabId}-1`}
                                aria-expanded="true"
                                aria-controls={`collapse-${tabId}-1`}
                              >
                                <span className="brownTriangle"></span> Overview
                              </button>
                            </h3>
                            <div
                              id={`collapse-${tabId}-1`}
                              className="accordion-collapse collapse show"
                              aria-labelledby={`heading-${tabId}-1`}
                              data-bs-parent={`#accordion-${tabId}`}
                            >
                              <div className="accordion-body">
                                <p>{content.overview}</p>
                              </div>
                            </div>
                          </div>

                          {/* Eligibility Criteria */}
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              id={`heading-${tabId}-2`}
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${tabId}-2`}
                                aria-expanded="false"
                                aria-controls={`collapse-${tabId}-2`}
                              >
                                <span className="brownTriangle"></span>{" "}
                                Eligibility Criteria
                              </button>
                            </h3>
                            <div
                              id={`collapse-${tabId}-2`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`heading-${tabId}-2`}
                              data-bs-parent={`#accordion-${tabId}`}
                            >
                              <div className="accordion-body">
                                <p>{content.eligibilityCriteria}</p>
                              </div>
                            </div>
                          </div>

                          {/* Specialization */}
                          {content.specialization && (
                            <div className="accordion-item">
                              <h3
                                className="accordion-header"
                                id={`heading-${tabId}-3`}
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${tabId}-3`}
                                  aria-expanded="false"
                                  aria-controls={`collapse-${tabId}-3`}
                                >
                                  <span className="brownTriangle"></span>{" "}
                                  Specialization
                                </button>
                              </h3>
                              <div
                                id={`collapse-${tabId}-3`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading-${tabId}-3`}
                                data-bs-parent={`#accordion-${tabId}`}
                              >
                                <div className="accordion-body">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: content.specialization,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Duration */}
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              id={`heading-${tabId}-4`}
                            >
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${tabId}-4`}
                                aria-expanded="false"
                                aria-controls={`collapse-${tabId}-4`}
                              >
                                <span className="brownTriangle"></span> Duration
                              </button>
                            </h3>
                            <div
                              id={`collapse-${tabId}-4`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`heading-${tabId}-4`}
                              data-bs-parent={`#accordion-${tabId}`}
                            >
                              <div className="accordion-body">
                                <p>{content.duration}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <a
                            href="#"
                            className="btn c_btn py-2 px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Enquire Now
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>;
                })}
                {/* Map Function - END */}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              PG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
