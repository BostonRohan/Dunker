import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login({ getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: email,
        password: password,
      };

      await axios.post("http://localhost:5000/quizzes/login", userData);
    } catch (err) {
      const { message } = err.response.data;
      setError(message);
    }
    await getUser();
    navigate("/quizzes");
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
