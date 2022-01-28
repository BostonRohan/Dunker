import { useState } from "react";
import Hamburger from "hamburger-react";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
function Nav({ width }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbar = ["News", "About", "Games", "Players", "Quizzes"];

  const handleClick = ({ section }) => {
    if (location !== "/") {
      if (section === "Players" || section === "Quizzes") {
        navigate(section.toLowerCase());
      } else {
        //Return to home, then scroll to section
        navigate("/");
        setTimeout(() => {
          scroll(section);
        }, 500);
      }
    } else {
      scroll(section);
    }
    //Close navigation on mobile
    setOpen(false);
  };

  const scroll = (section, delay) => {
    return scroller.scrollTo(section, {
      smooth: true,
      delay: open ? 500 : 0,
    });
  };
  return (
    <div className={open ? "nav active" : "nav"}>
      {width > 600 ? (
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
