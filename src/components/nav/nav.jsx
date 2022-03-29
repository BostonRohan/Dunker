import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useState } from "react";
import scroll from "../../../utils/scroll";
import styles from "../../styles/nav.module.css";

function Nav({ width }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const navbar = ["News", "About", "Games", "Players", "Quizzes"];
  const location = router.pathname;

  const handleClick = ({ section }) => {
    if (section === "Players" || section === "Quizzes") {
      router.push(`/${section.toLowerCase()}`);
    } else if (location === "/") scroll(section);
    else {
      router.push("/");
      setTimeout(() => {
        scroll(section);
      }, 500);
    }
    //Close navigation on mobile
    setOpen(false);
  };

  return (
    <div className={open ? styles.active : styles.nav}>
      {width > 750 ? (
        <ul>
          {navbar.map((section, index) => {
            return (
              <li key={index} onClick={() => handleClick({ section })}>
                {section}
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <Hamburger toggled={open} toggle={setOpen} size={48} />
          {open && (
            <ul>
              {navbar.map((section, index) => {
                return (
                  <li key={index} onClick={() => handleClick({ section })}>
                    {section}
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
export default Nav;
