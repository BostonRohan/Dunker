import "./styles.css";
function News({ id }) {
  return (
    <section className="News">
      <div className="container">
        <blockquote className="twitter-tweet">
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
