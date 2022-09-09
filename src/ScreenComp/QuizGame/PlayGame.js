import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const PlayGame = () => {
  const [field, setField] = useState();
  const [data, setData] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setData((val) => {
      return [...val, field];
    });
    setField("");
  };

  return (
    <>
      <section className="section-1" id="section-1">
        <main>
          {/* <div className="score-counter">
            <p className="score-text">CORRECT:</p>
          </div> */}
          <div className="text-container">
            <h3>Your Guess</h3>
          </div>
          <form action="" type="submit" onSubmit={onSubmit}>
            <div className="quiz-options">
              <input
                type="number"
                className="text-center"
                placeholder="Enter A Number"
                onChange={(e) => setField(e.target.value)}
                value={field}
              />
            </div>
          </form>
          <div className="quiz-options">
            <label className="radio-label jsjwjdwjdwjdwco" htmlFor="one-a">
              <span>No Of Previous Attempts</span>{" "}
              <span className="noOfAttempts">{data.length}</span>
            </label>
          </div>
          <div className="quiz-options">
            <label className="radio-label jsjwjdwjdwjdwco" htmlFor="one-a">
              <span>No Of Previous Guesses</span>{" "}
              <span className="noOfAttempts">
                {data.length > 1 ? data + "," : data}
              </span>
            </label>
          </div>
        </main>
      </section>
    </>
  );
};

export default PlayGame;
