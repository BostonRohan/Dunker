import { useState } from "react";
import Hamburger from "hamburger-react";
import { scroller } from "react-scroll";
import "./styles.css";
function Nav({ width }) {
  const [open, setOpen] = useState(false);
  const navbar = ["News", "About", "Games", "Players", "Quizzes"];

  const handleClick = ({ item }) => {
    open ? setOpen(false) : setOpen(open);
    scroller.scrollTo(item, {
      smooth: true,
      delay: open ? 500 : 0,
    });
  };

  return (
    <div className={open ? "nav active" : "nav"}>
      {width > 600 ? (
        <ul>
          {navbar.map((item, index) => {
            return (
              <li key={index} onClick={() => handleClick({ item })}>
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <>
          <Hamburger toggled={open} toggle={setOpen} size={48} />
          {open && (
            <ul>
              {navbar.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleClick({ item })}>
                    {item}
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
