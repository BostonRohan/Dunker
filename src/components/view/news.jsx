import styles from "../../styles/news.module.css";
function News({ id }) {
  return (
    <section className={`${styles.page} News`}>
      <div className="container">
        <blockquote className={styles.tweet}>
          &mdash; Adrian Wojnarowski (@wojespn){" "}
          <a
            href={`https://twitter.com/wojespn/status/${id}?ref_src=twsrc%5Etfw`}
          >
            May 5, 2014
          </a>
        </blockquote>{" "}
      </div>
    </section>
  );
}
export default News;
