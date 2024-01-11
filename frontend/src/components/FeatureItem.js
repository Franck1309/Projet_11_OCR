import React from "react";

const FeatureItem = ({ image, title, text }) => {
  return (
    <div className="feature-item" >
      <h2 className="sr-only">Features</h2>
      <div>
        <img src={image} alt={title} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
