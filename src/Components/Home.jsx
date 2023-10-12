import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="background Image" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            natus neque maiores labore earum autem vero quidem? Nisi debitis
            modi iste doloremque facere, atque nemo similique, cupiditate omnis
            enim sequi?
          </p>
          <button>
            Order Now <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
            <img src={BannerImage} alt="Banner Image" /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
