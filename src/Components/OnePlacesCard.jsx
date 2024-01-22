// OnePlacesCard.js

import React from 'react';

const OnePlacesCard = ({ imageSrc, title, description }) => (
    <div className="onePlacesCard">
    <img src={imageSrc} alt="" />
    <h6>{title}</h6>
    <p>{description}</p>
  </div>
);

export default OnePlacesCard;
