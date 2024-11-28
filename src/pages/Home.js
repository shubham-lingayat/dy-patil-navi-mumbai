import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section
        className="container-fluid position-relative d-lg-block px-0 d-none hero_section text-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <video
          autoplay="autoplay"
          playsinline=""
          muted="muted"
          type="video/mp4"
          loop="loop"
          src="https://videos.files.wordpress.com/2CjN9gNT/university-drone-final.mp4"
          className="video android"
        ></video>
      </section>
      {/* <!-- ---------------------------------------------------------------------------------------------------- --> */}

      <section
        className=" d-lg-none d-block position-relative hero_section"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="container">
          <div className="row ">
            {/* <!-- Display the image --> */}
            <img
              src="https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/10/11112157/ezgif-1-853931981f-gif.gif"
              alt="DY Patil University"
              className="video ios-div"
            />
          </div>
        </div>
      </section>

      <AboutUs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
