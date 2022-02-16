import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./styles.css";
function Footer({ tweet, width }) {
  return (
    <footer>
      <Link activeClass={"active"} to="News" smooth={true} duration={1000}>
        <div className="container">
          <section>
            <h3>@wojespn</h3>
            <i className="bi bi-twitter"></i>
          </section>
          {tweet && (
            <motion.p
              initial={{ x: -width }}
              animate={{ x: width }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              }}
            >
              {tweet}
            </motion.p>
          )}
        </div>
      </Link>
    </footer>
  );
}
export default Footer;
