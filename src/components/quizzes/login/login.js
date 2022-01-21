import axios from "axios";
import { useState } from "react";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost5000/quizzes/login", userData)
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default Login;
