import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QuizData from "./quizzes.json";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Quizzes({ user, getUser }) {
  const [error, setError] = useState(undefined);
  const options = Object.keys(QuizData);
  const navigate = useNavigate();

  useEffect(getUser, []);

  const logout = async () => {
    try {
      await axios.get("https://dunkerio.herokuapp.com/quizzes/logout", {
        withCredentials: true,
      });
      await getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (name) => {
    if (user === null) {
      setError("You must be signed in to complete a quiz");
      return;
    } else navigate(`/quiz/${name}`);
  };

  return (
    <section className="quizzes">
      <section className="login-signup">
        {user !== null && <h4 className="user">{user}</h4>}
        {user === null ? (
          <>
            <Link to="/quizzes/signup">Signup</Link>
            <Link to="/quizzes/login">Login</Link>
          </>
        ) : (
          <h4 className="logout" onClick={logout}>
            Logout
          </h4>
        )}
      </section>
      <div className="quiz-options">
        {options.map((name, i) => {
          return (
            <div
              key={i}
              className="container"
              onClick={() => handleClick(name)}
            >
              {error && <h5 className="errorMsg">{error}</h5>}
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
