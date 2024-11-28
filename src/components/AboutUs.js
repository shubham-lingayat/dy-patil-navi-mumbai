import React from "react";
import Form from "./Form";

const AboutUs = () => {
  const url = process.env.REACT_APP_URL || "#";
  // For heading
  const head = ["18+", "50K+", "1264+", "90+"];
  const desc = [
    "Interdisciplinary Institutes",
    "Alumni",
    "Erudite Faculty",
    "Programs in Diverse Fields",
  ];
  // For Logos
  const logoName = ["NAAC", "UGC", "AICTE", "IIRF", "NIRF", "BCI", "AIU"];

  return (
    <section className="">
      <div className="container mt-lg-5" id="about-us">
        <div className="row  py-4 pe-lg-5 justify-content-lg-between">
          <div className="col-lg-8">
            <div className="col-lg-12  text-lg-start text-center ">
              <h1 className="text-dark fw-normal mb-3 display-5">
                About
                <span className="text-red fw-bold">
                  D. Y. Patil University,
                </span>
                Mumbai
              </h1>
            </div>
            <p align="justify" className="pt-3">
              The D Y Patil University (DYPU) is named after its illustrious and
              visionary founder, Dr. Dnyandeo Yashwantrao Patil. Known for his
              philanthropic and social service, Dr. Patil, a Padma Shri awardee,
              visualized a dream to make quality education accessible to the
              ever-burgeoning, aspiring youth of the nation seeking careers in
              professional domains like engineering and medicine. Thus, the D Y
              Patil University stands as a symbol of excellence in education and
              health care, the twin objectives of the founder chancellor.
            </p>
            <div className="row">
              {/* Map Function start */}
              {head.map((value, index) => (
                <div className="col-lg-3 col-6 mb-3 mb-lg-0 text-center  d-grid">
                  <div className="bg-white p-3">
                    <h4 className="text-red h2">{value}</h4>
                    <p>{desc[index]}</p>
                  </div>
                </div>
              ))}
              {/* Map function End */}
            </div>
            <div className="col-lg-12  mt-md-5 mt-3  text-lg-start text-center">
              <h2 className="text-purple fw-normal mb-4 display-6 title">
                Awards and Recognitions
              </h2>
            </div>
            <div className="row awards_01 owl-carousel justify-content-center ">
              {/* Map Function start */}
              {logoName.map((value, index) => (
                <div className="col-lg-12 text-center mb-4 award_02">
                  <div className=" py-3 me-3 border box_shadow">
                    <img
                      src={`${url}images/awards/${index + 1}.webp`}
                      loading="lazy"
                      className="img-fluid "
                      alt="img not found"
                    />
                    <h6 className="content text-red pt-3">{value}</h6>
                  </div>
                </div>
              ))}
              {/* Map Function End */}
            </div>
          </div>
          <div className="col-lg-4 pb-3 pb-lg-0 d-none d-lg-grid">
            <div className="border text-center pt-3">
              <div className="about_logo">
                <img
                  src={`${url}images/logo/3.png`}
                  height="50"
                  loading="lazy"
                  alt=""
                />
                <img
                  src={`${url}images/logo/naac.png`}
                  height="25"
                  loading="lazy"
                  alt=""
                />
              </div>
              <h4 className="border-tb mt-2 py-1">Admissions Open 2025</h4>
              {/* Use Form */}
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
