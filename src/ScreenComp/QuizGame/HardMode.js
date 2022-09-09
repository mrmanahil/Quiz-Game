import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import GameResult from "./GameResult";

const HardMode = () => {
  const navigate = useNavigate();

  const [field, setField] = useState();
  const [data, setData] = useState([]);
  const [randomNo, setRandomNo] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    let generateNo = Math.floor(Math.random() * 100);
    console.log(generateNo);
    setRandomNo(generateNo);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    // console.log(submit);
    setData((val) => {
      return [...val, field];
    });
    setField("");
  };

  return (
    <>
      {data?.length === 5 ? (
        <>
          <GameResult result="You Loose" />
        </>
      ) : (
        <>
          <section className="section-1" id="section-1">
            <main>
              <div className="text-container">
                <h3 className="text-center mt-5">
                  {submit && field > randomNo
                    ? "Your Guess Is High"
                    : submit && field < randomNo
                    ? "Your Guess Is Low"
                    : field == randomNo
                    ? navigate("/GameResult")
                    : field >= 0
                    ? "Type Your Guess"
                    : null}
                </h3>
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
      )}
    </>
  );
};

export default HardMode;
