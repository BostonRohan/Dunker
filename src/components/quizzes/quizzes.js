import { useEffect } from "react";
import getUser from "./utils/getUser";

function Quizzes() {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className="quizzes">
      <div className="container"></div>
    </section>
  );
}
export default Quizzes;
