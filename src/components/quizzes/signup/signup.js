import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getUser from "../utils/getUser";
import "./styles.css";
function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:5000/quizzes/signup", userData)
      .then(() => {
        getUser();
        navigate("/quizzes");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          ></input>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
export default Signup;
