import React from "react";
import { WhatYouGetData } from "../../what-you-get-data";
import WhatYouGetCard from "../WhatYouGetCard";
import "./WhatYouGet.css";

export default function WhatYouGet() {
  return (
    <div className="what-you-get-container">
      <div className="what-you-get">
        <div className="what-you-get-title">What you get:</div>
        <div className="what-you-get-items">
          {WhatYouGetData.map((data) => {
            return <WhatYouGetCard key={data.id} {...data} />;
          })}
        </div>
      </div>
    </div>
  );
}
