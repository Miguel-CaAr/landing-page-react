import react from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "SLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore reprehenderit assumenda optio dignissimos officia iusto maiores.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "SLorem ipsum dolor sit amet consectetur adipisicing elit..",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "SLorem dolor sit amet consectetur adipisicing elit..",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Work It Works</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatibus natus facilis harum repellendus qui.</p>
      </div>
      <div className="work-section-bottom">
        {
            workInfoData.map((data)=>(
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Work;
