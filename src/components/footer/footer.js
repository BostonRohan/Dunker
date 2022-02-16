import { Link } from "react-scroll";
import { motion } from "framer-motion";
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
          {tweet && (
            <motion.p
              initial={{ x: -500 }}
              animate={{ x: 2000 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
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
