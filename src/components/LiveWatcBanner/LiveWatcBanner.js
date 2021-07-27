import React from "react";

import img from "../svgs/davis-game2-1920-210527-1568x882.jpg";
import "./LiveWatcBanner.css";

export default function LiveWatcBanner() {
  return (
    <div
      className="live-watch-banner"
      style={{
        backgroundImage: `url("https://cdn.nba.com/manage/2021/05/davis-game2-1920-210527-1568x882.jpg")`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          Watch Live Playoff Games At A New Low Price
        </h1>
        <p className="banner-text">
          Watch live games, plus get in-depth stats and 10-min action-packed
          recaps at a lower, playoff price.
        </p>
        <button className="banner-btn">
          <a href="#"> Get Started</a>
        </button>
        <p className="banner-comm">
          Already subscribed? Sign in with your NBA or TV Provider account
          above.
        </p>
      </div>
    </div>
  );
}

