import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "../../styles/footer.module.css";
function Footer({ tweet, width }) {
  return (
    <footer className={styles.footer}>
      <Link activeClass={"active"} to="News" smooth={true} duration={1000}>
        <div className="container">
          <section>
            <h3>@wojespn</h3>
            <i className="bi bi-twitter"></i>
          </section>
          {tweet && (
            <motion.p
              initial={{ x: width <= 750 ? -width * 4 : -width }}
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
