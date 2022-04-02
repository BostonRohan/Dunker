import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import quizzes from "../../../utils/quizzes";
import options from "../../../utils/options";
import styles from "../../styles/quiz.module.css";

function Quiz() {
  const [question, setQuestion] = useState(0);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(undefined);
  const [error, setError] = useState("");
  const router = useRouter();
  const page = router.query.name;
  let quizOptions = options[page][question];

  const postQuiz = useCallback(async () => {
    await axios
      .post(`https://dunkerio.herokuapp.com/quiz/${page}`, { [page]: selected })
      .then((res) => {
        setScore(parseInt(res.data));
      })
      .catch((err) => {
        const { message } = err.message;
        setError(message);
      });
  });

  const handleClick = (i) => {
    setSelected([...selected, i]);
    setQuestion(question + 1);
  };

  if (question === 10) postQuiz();

  return (
    <div className={styles.page}>
      <div className={`${styles.container} container`}>
        {error && <p className="errorMsg">{error}</p>}
        {question < 10 ? (
          <section>
            {page === "player" && <p>* 2022 season</p>}
            <h1>{quizzes[page][question]}</h1>
            {quizOptions.map((answer, i) => {
              return (
                <div
                  key={i}
                  className={styles.answer}
                  onClick={() => handleClick(i)}
                >
                  {answer}
                </div>
              );
            })}
          </section>
        ) : (
          score && (
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
                alt={score > 5 ? "LeBron James" : "Michael Jordan crying"}
              />
            </section>
          )
        )}
      </div>
    </div>
  );
}
export default Quiz;
