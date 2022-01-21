import { useEffect } from "react";
import getUser from "./utils/getUser";

function Quizzes() {
  const user = localStorage.getItem("user");
  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className="quizzes">
      <section className="header">
        <img src="./user-logos/jordan.jpg" alt="Profile Photo" />
        <button className="user-btn">{user ? "Logout" : "Login"}</button>
        {!user && <button className="user-btn">Login</button>}
      </section>
      <div className="container">Hello World</div>
    </section>
  );
}
export default Quizzes;
