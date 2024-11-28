import React from "react";

const WhyChooseUs = () => {
  const url = process.env.REACT_APP_URL || "#";
  return (
    <section>
      <div className="container" id="why-us">
        <div className="row why_choose ">
          <div
            className="col-lg-8 bg_img bg_img_02"
            data-bgimg={`${url}images/why/1.webp`}
          ></div>
          <div className="col-lg-4 why_color_01 pb_01">
            <h2 className="text-white fw-normal mb-4 display-5 title">
              Why Choose
              <span className="fw-bold">
                D.Y. Patil Deemed to be University?
              </span>
            </h2>
            <ul className="h_list_num list-unstyled  lh-lg">
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>Ranked
                1st by Tech Next India 2019
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>Ranked
                11th in Outlook magazine
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>Ranked
                12th in India by INDIA TODAY
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>8000+
                Students on Campus from across the Country
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>500+
                Research Scientists
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>8000+
                Research Papers
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>5485
                Research Papers by Faculties
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>427
                Consultancy Projects by Students and Faculties
              </li>
            </ul>
          </div>
          <div
            className="col-lg-4 bg_img"
            data-bgimg={`${url}images/why/2.webp`}
          ></div>
          <div className="col-lg-4 why_color_02 pb_02">
            <h2 className="text-white fw-normal mb-4 display-5 title">
              <span className="fw-bold">Accredited & Recognized</span>
            </h2>

            <ul className="h_list_num list-unstyled  lh-lg">
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>
                Recognised as Category 1 University by MHRD
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>NAAC
                A++ Accredited University
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>UGC
                Recognized & AICTE Approved
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>1st
                Rank in India by GHRDC
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>Ranked
                Amongst Top 100 Universities in India by NIRF
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>QS
                International Trade Ranking (2023): #121-130 globally!
              </li>
            </ul>
          </div>
          <div
            className="col-lg-4 bg_img bg_img_01"
            data-bgimg={`${url}images/why/3.webp`}
          ></div>
          <div className="col-lg-4 why_color_03 pb_02">
            <h2>
              <span className="text-white">
                Global Exposure & Opportunities
              </span>{" "}
            </h2>
            <h2 className="text-white fw-normal mb-3 display-6">
              <span className="fw-bold"></span>
            </h2>
            <p className="text-white">
              At D.Y. Patil, your education
              <br /> extends beyond borders:
            </p>
            <ul className="h_list_num list-unstyled  lh-lg">
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>155+
                Programs in management, technology, and more to choose from 20+
                Schools in Campus
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>22+
                Foreign Collaborations with prestigious Global Universities
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>48
                Active International MOU with Universities across Europe,
                America, and Asia Pacific
              </li>
              <li className="text-white">
                <i className="bi bi-caret-right-fill text-white pe-2"></i>
                Exclusive participation into National & International Workshops,
                Seminars, Conferences
              </li>
            </ul>
            <div className="mb-3">
              <a
                href="#none"
                className="btn c_btn_01 fw-normal"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enquire Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-8 bg_img bg_img_02"
            data-bgimg={`${url}images/why/4.webp`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
