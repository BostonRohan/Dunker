import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuizData from "./quizzes.json";

function Quiz() {
  const [question, setQuestion] = useState(0);
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  return (
    <div className="container">
      <h1>{QuizData[page][question]}</h1>
      <form>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
      </form>
    </div>
  );
}
export default Quiz;
