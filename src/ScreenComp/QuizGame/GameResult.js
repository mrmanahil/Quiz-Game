import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import music from "../../sound/Notification.mp3";

const GameResult = ({ result }) => {
  let audio = new Audio(music);

  const playTone = () => {
    audio.play();
  };

  return (
    <>
      <div id="tudo">
        <div className="gameover">
          <p> {result === "You Loose" ? "You Loose" : "You Win"} </p>
        </div>
        <div className="continue">
          <p> CONTINUE? </p>
        </div>
        <div className="opcoes">
          <div className="yes">
            <Link to="/" onClick={() => playTone()}>
              YES
            </Link>
          </div>
          <div className="no">
            <Link to="/" onClick={() => playTone()}>
              NO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResult;
