import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuizData from "../quizzes.json";
import QuizAnswerData from "../quiz-answers.json";

function Quiz() {
  const [question, setQuestion] = useState(0);
  const [selected, setSelected] = useState([]);
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  let possibleAnswers = QuizAnswerData[page][question];

  const handleClick = (i) => {
    if (question === 10) return;
    //post req here to send the data to the backend to handle
    else {
      setSelected([...selected, i]);
      setQuestion(question + 1);
    }
  };

  return (
    <div className="container">
      {question <= 10 && (
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
      )}
    </div>
  );
}
export default Quiz;
