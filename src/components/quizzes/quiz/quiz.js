import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import QuizData from "../quizzes.json";
import QuizAnswerData from "../quiz-answers.json";
import "./styles.css";

function Quiz() {
  const [question, setQuestion] = useState(0);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  let possibleAnswers = QuizAnswerData[page][question];

  const postQuiz = async () => {
    await axios
      .post(
        `http://localhost:5000/quiz/${page}`,
        { [page]: selected },
        { withCredentials: true }
      )
      .then((res) => {
        setScore(parseInt(res.data));
      })
      .catch((err) => {
        const { message } = err.response.data;
        setError(message);
      });
  };

  const handleClick = (i) => {
    setSelected([...selected, i]);
    setQuestion(question + 1);
  };

  if (question === 10) postQuiz();

  return (
    <div className="Quiz">
      <div className="container">
        {error && <p className="errorMsg">{error}</p>}
        {question < 10 ? (
          <section>
            {page === "player" && <p>* 2022 season</p>}
            <h1>{QuizData[page][question]}</h1>
            {possibleAnswers.map((answer, i) => {
              return (
                <div
                  key={i}
                  className="quiz-answer"
                  onClick={() => handleClick(i)}
                >
                  {answer}
                </div>
              );
            })}
          </section>
        ) : (
          <section>
            <h2>
              Your Score:{" "}
              <span className={score > 5 ? "correctMsg" : "errorMsg"}>
                {score + "0" + "." + "00%"}
              </span>
            </h2>
            <img
              src={
                score > 5
                  ? "../quiz-images/lebron-crazy.jpg"
                  : "../quiz-images/jordan-crying.jpg"
              }
              alt=""
            />
          </section>
        )}
      </div>
    </div>
  );
}
export default Quiz;
