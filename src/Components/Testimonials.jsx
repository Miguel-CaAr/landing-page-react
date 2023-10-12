import React from "react";
import ProfilePic from "../Assets/miguel-castro-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores quod officia, voluptatem eos ut accusantium.</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et reprehenderit quo praesentium nesciunt amet soluta commodi consectetur dolores.</p>
        <div className="testimonial-stars-container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>Miguel Castro</h2>
      </div>
    </div>
  );
};

export default Testimonials;
