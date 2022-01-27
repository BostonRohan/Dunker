import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QuizData from "./quizzes.json";
import "./styles.css";

function Quizzes({ user, getUser }) {
  const [open, setOpen] = useState(false);
  const options = Object.keys(QuizData);

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
            <div key={i} className="container">
              {name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Quizzes;
