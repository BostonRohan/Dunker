import { Link } from "react-scroll";
import "./styles.css";
function Footer({ tweet }) {
  return (
    <footer>
      <Link activeClass={"active"} to="News" smooth={true} duration={1000}>
        <div className="container">
          <section>
            <h3>@wojespn</h3>
            <i className="bi bi-twitter"></i>
          </section>
          <p>{tweet}</p>
        </div>
      </Link>
    </footer>
  );
}
export default Footer;
