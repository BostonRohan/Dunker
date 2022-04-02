import styles from "../../styles/about.module.css";
function About() {
  return (
    <section className={`${styles.page} About `}>
      <div className={`${styles.container} container`}>
        <h1>About</h1>
        <section className={styles.content}>
          <p>
            As an avid basketball follower and former high school player, I know
            how serious the barber-shop talks and debates over LeBron vs Jordan
            can get. Dunker is an app created to fund these arguments and
            encourage people to stay immersed in the basketball community. Ever
            need to see today's slate of games, view new news from none other
            than Adrian Wojnarowski, take nba quizzes, or compare your favorite
            players? Dunker is the place to be!
          </p>
        </section>
        <h3>Join the community!</h3>
        <span>
          <i className="bi bi-discord" /> Discord
        </span>
      </div>
    </section>
  );
}
export default About;
