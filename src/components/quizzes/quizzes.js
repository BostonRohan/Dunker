import { useEffect, useState } from "react";
import getUser from "./utils/getUser";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function Quizzes() {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/quizzes/");
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
            user !== "null"
              ? "./user-logos/jordan.jpg"
              : "./user-logos/blank-profile.png"
          }
          alt="Profile Photo"
        />
        {user !== "null" && <h3>{user}</h3>}
        {open && (
          <>
            {user === "null" ? (
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
