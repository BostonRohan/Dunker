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
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  const scoreSplit = parseInt(score.toString().split("%")[0]);
  let possibleAnswers = QuizAnswerData[page][question];

  const handleClick = (i) => {
    setSelected([...selected, i]);
    setQuestion(question + 1);

    if (question === 9) {
      axios
        .post(
          `http://localhost:5000/quiz/${page}`,
          { [page]: selected },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          setScore(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Quiz">
      <div className="container">
        {question < 10 ? (
          <section>
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
              Your Score :
              <span className={scoreSplit > 50 ? "correctMsg" : "errorMsg"}>
                {score}
              </span>
            </h2>
            <img
              src={
                scoreSplit > 50
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
