import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QuizData from "./quizzes.json";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Quizzes({ user, getUser }) {
  const [open, setOpen] = useState(false);
  const options = Object.keys(QuizData);
  const navigate = useNavigate();

  useEffect(getUser, []);

  const logout = async () => {
    try {
      await axios.get("http://localhost:5000/quizzes/logout", {
        withCredentials: true,
      });
      await getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = ({ name }) => {
    if (user === null) return;
    else navigate(`/quiz/${name}`);
  };

  return (
    <section className="quizzes">
      <section
        className="header"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src={
            user !== null
              ? "./user-logos/jordan.jpg"
              : "./user-logos/blank-profile.png"
          }
          alt=""
        />
        {user !== null && <h3>{user}</h3>}
        {open && (
          <>
            {user === null ? (
              <>
                <h3>
                  <Link to="/quizzes/signup">Signup</Link>
                </h3>
                <h3>
                  <Link to="/quizzes/login">Login</Link>
                </h3>
              </>
            ) : (
              <h3 onClick={logout}>Logout</h3>
            )}
          </>
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
