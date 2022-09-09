import React from "react";
import { useNavigate } from "react-router";

const ChooseDifficulty = () => {
  const navigate = useNavigate();

  return (
    <section className="section-1" id="section-1">
      <main>
        <div className="text-container">
          <h3>Guess The Random Number Between 1-100</h3>
        </div>
        <div className="text-container mt-5">
          <h3>Select The Difficulty</h3>
        </div>
        <div className="quiz-options">
          <label
            className="radio-label jsjwjdwjdwjdwco"
            htmlFor="one-a"
            style={{ height: "5vh" }}
            onClick={() => navigate("/play")}
          >
            <span className="alphabet text-center">Easy</span> 10 Attempts{" "}
            <img
              className="icon jdsjkefkefkefefexco"
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
              alt=""
            />
          </label>
        </div>
        <div className="quiz-options">
          <label
            className="radio-label jsjwjdwjdwjdwco"
            htmlFor="one-a"
            onClick={() => navigate("/play")}
          >
            <span className="alphabet">Hard:</span> 5 Attempts{" "}
            <img
              className="icon jdsjkefkefkefefexco"
              src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
              alt=""
            />
          </label>
        </div>
      </main>
    </section>
  );
};

export default ChooseDifficulty;
