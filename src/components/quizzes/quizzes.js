import { useEffect, useState } from "react";
import getUser from "./utils/getUser";
import "./styles.css";
function Quizzes() {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem("user");
  useEffect(() => {
    getUser();
  }, []);
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
            user ? "./user-logos/jordan.jpg" : "./user-logos/blank-profile.png"
          }
          alt="Profile Photo"
        />
        {user && <h3>{user}</h3>}
        {open && (
          <>
            <p>{user ? "Logout" : "Signup"}</p>
            <p>{!user && "Sign in"}</p>
          </>
        )}
      </section>
      <div className="container">Hello World</div>
    </section>
  );
}
export default Quizzes;
