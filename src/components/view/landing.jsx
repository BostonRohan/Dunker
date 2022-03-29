import styles from "../../styles/landing.module.css";
function Landing() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Dunker</h1>
        <h3>Your go-to platform for everything basketball.</h3>
      </section>
      <div className={`${styles.container} container`}>
        <img src="../kobe.png" alt="Kobe Bryant" />
      </div>
    </div>
  );
}
export default Landing;
