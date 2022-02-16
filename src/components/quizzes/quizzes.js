import QuizData from "./quizzes.json";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Quizzes() {
  const options = Object.keys(QuizData);
  const navigate = useNavigate();

  return (
    <section className="quizzes">
      <div className="quiz-options">
        {options.map((name, i) => {
          return (
            <div
              key={i}
              className="container"
              onClick={() => navigate(`/quiz/${name}`)}
            >
              <img src="./quiz-images/nba-logo.png" alt="" />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Quizzes;
