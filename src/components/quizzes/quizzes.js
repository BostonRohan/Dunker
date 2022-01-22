import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function Quizzes({ user, getUser }) {
  const [open, setOpen] = useState(false);

  useEffect(getUser, [getUser]);

  const logout = async () => {
    try {
      await axios.get("http://localhost:5000/quizzes/logout");
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
                <Link to="/quizzes/signup">Signup</Link>
                <Link to="/quizzes/login">Login</Link>
              </>
            ) : (
              <p onClick={logout}>Logout</p>
            )}
          </>
        )}
      </section>
      <div className="container">Hello World</div>
    </section>
  );
}
export default Quizzes;
