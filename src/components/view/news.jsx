import TweetEmbed from "react-tweet-embed";
import styles from "../../styles/news.module.css";

function News({ id }) {
  return (
    <section className={`${styles.page} News`}>
      <div>
        {id && <TweetEmbed tweetId={id} options={{ theme: "dark" }} />}
        <a
          href={`https://twitter.com/wojespn/status/${id}?ref_src=twsrc%5Etfw`}
          target="_blank"
          rel="noreferrer"
        >
          &mdash; Adrian Wojnarowski (@wojespn){" "}
        </a>
      </div>
    </section>
  );
}
export default News;
