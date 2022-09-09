import React from "react";
import { useNavigate } from "react-router";
import ChooseDifficulty from "./ChooseDifficulty";
import PlayGame from "./PlayGame";
import "./quiz.css";

const QuizGame = () => {
  return (
    <>
      <ChooseDifficulty />

      {/* <!-- GAME OVER PAGE --> */}
      {/* <section id="game-over">
        <div className="game-over-content">
          <div className="over-text-cont">
            <h1 data-heading="Game Over">Game Over</h1>
            <h2>Total Score:</h2>
            <a id="btn" type="submit" onclick="window.location.href='#refresh'">
              Play Again
            </a>
          </div>
        </div>
      </section>
      <section id="refresh">
        <div className="refresh-content">
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 341.12 341.33"
          >
            <title>multimedia2</title>
            <path
              className="cls-1"
              d="M341.23,149.33V0L291.09,50.13A169.56,169.56,0,0,0,170.56,0C76.27,0,.11,76.37.11,170.67S76.27,341.33,170.56,341.33c79.47,0,146-54.4,164.91-128H291.09A127.94,127.94,0,1,1,170.56,42.67c35.31,0,67,14.72,90.13,37.86l-68.8,68.8Z"
              transform="translate(-0.11)"
            />
          </svg>
          <h2>Refresh/Reload this page to continue</h2>
        </div>
      </section> */}
    </>
  );
};

export default QuizGame;
