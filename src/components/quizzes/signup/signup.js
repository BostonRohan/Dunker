import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
function Signup() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: username,
        email: email,
        password: password,
      };
      await axios.post(
        "https://dunkerio.herokuapp.com/quizzes/signup",
        userData,
        {
          withCredentials: true,
        }
      );
      navigate("/quizzes");
    } catch (err) {
      const { message } = err.response.data;
      setError(message);
    }
  };
  return (
    <div className="signup">
      <div className="container">
        {error && <p className="errorMsg">{error}</p>}
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
