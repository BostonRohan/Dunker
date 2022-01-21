import axios from "axios";
import { useState } from "react";
import getUser from "../utils/getUser";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/quizzes/login", userData)
      .then(() => {
        getUser();
      })
      .catch((err) => {
        const { message } = err.response.data;
        setError(message);
      });
  };
  return (
    <div className="login">
      <div className="container">
        {error && <p className="errorMsg">{error}</p>}
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
