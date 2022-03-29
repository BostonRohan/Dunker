import quizzes from "../../../utils/quizzes";
import styles from "../../styles/quizzes.module.css";
import { useRouter } from "next/router";

function Quizzes() {
  const options = Object.keys(quizzes);
  const router = useRouter();

  return (
    <section className={styles.page}>
      <div className={styles.options}>
        {options.map((name, i) => {
          return (
            <div
              key={i}
              className={`${styles.container} container`}
              onClick={() =>
                router.push({
                  pathname: "/quiz/[name]",
                  query: { name: name },
                })
              }
            >
              <img src="./quiz-images/nba-logo.png" alt="NBA logo" />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Quizzes;
