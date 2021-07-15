import React, { useState } from "react";
import "./Corousel.css";

import { games } from "../constants";

export function Carousel() {
  // const currentGame = games.map((item) => {
  //   return(
  //     <div  className="banner-container">
  //     <img className="banner-img" src={item.home.logo}></img>
  //     <p>{item.home.points} - {item.guest.points}</p>
  //     <img className="banner-img" src={item.guest.logo}></img>
  // </div>
  //   )

  // })

  const [currentGameIndex, setCurrentGame] = useState(0);
  const currentGame = games[currentGameIndex];

const nextClick = () => {
  setCurrentGame(
    currentGameIndex >= games.length - 1 ? 0 : currentGameIndex + 1
    )
}

const prevClick = () => {
  setCurrentGame(
    currentGameIndex <= 0 ? games.length - 1 : currentGameIndex - 1
    )
}

  return (
    <div className="container">
      <main className="main-content">
        <article className="banner" id="banner">
          <div className="banner-container">
            <img className="banner-img" src={currentGame.home.logo}></img>
            <p>
              {currentGame.home.points} - {currentGame.guest.points}
            </p>
            <img className="banner-img" src={currentGame.guest.logo}></img>
          </div>
        </article>

        <div className="controls">
          <button id="prev" className="button" onClick={prevClick}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.672 15.791L8.262 14.1995L5.0595 11L17.25 11V8.74998L5.06025 8.74998L8.26275 5.54748L6.672 3.95598L0.75 9.87498L6.672 15.791Z"
                fill="white"
              />
            </svg>

            <span>Prev game</span>
          </button>

          <div className="indicators" id="indicators"></div>

          <button id="next" className="button" onClick={nextClick}>
            <span>Next game</span>

            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.328 3.20901L9.738 4.80052L12.9405 8.00002H0.75V10.25H12.9398L9.73725 13.4525L11.328 15.044L17.25 9.12502L11.328 3.20901Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
