import React from "react";

export default function WhatYouGetCard({
  image,
  whatYouGetTitle,
  whatYouGetDescription,
}) {
  return (
    <div className="what-you-get-item">
      <div className="what-you-get-item-image">
        <img src={image} alt="bullet 1" />
      </div>
      <div className="what-you-get-item-text">
        <div className="what-you-get-item-headline">{whatYouGetTitle}</div>
        <div className="what-you-get-item-description">
          {whatYouGetDescription}
        </div>
      </div>
    </div>
  );
}
