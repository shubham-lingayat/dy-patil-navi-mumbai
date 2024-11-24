import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/*  Video for all devices */}
      <video
        autoPlay={"autoplay"}
        playsInline
        muted={true}
        loop={true}
        src="https://videos.files.wordpress.com/2CjN9gNT/university-drone-final.mp4"
        className="video android"
      ></video>

      {/* Video for IOS devices only */}
      <img
        src="https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/10/11112157/ezgif-1-853931981f-gif.gif"
        alt="DY Patil University"
        class="video ios-div"
      ></img>
    </div>
  );
};

export default Home;
