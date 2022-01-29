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
  let possibleAnswers = QuizAnswerData[page][question];
  console.log(score, question, page);

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
            <h2>Your Score : {score}</h2>
          </section>
        )}
      </div>
    </div>
  );
}
export default Quiz;
