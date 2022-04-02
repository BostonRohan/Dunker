import Calendar from "react-calendar";
import { useState, useEffect, useRef } from "react";
import format from "../../../../utils/formatDate";
import styles from "../../../styles/modal.module.css";
import "react-calendar/dist/Calendar.css";

function Modal({ fetchGames, close, setClickedDate }) {
  const [date, setDate] = useState(new Date());
  //start of the new year, nba schedule doesn't realease until July...
  const maxDate = new Date(`${new Date().getFullYear() + 1}-01-01`);
  const minDate = new Date("1979-10-13");
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleChange = async (clickedDate) => {
    setDate(clickedDate);
    await fetchGames(format(clickedDate));
    setClickedDate(format(clickedDate));
    close();
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          close();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className={styles.modal}>
      <span ref={wrapperRef}>
        <Calendar
          maxDate={maxDate}
          onChange={(date) => handleChange(date)}
          value={date}
          minDate={minDate}
        />
      </span>
    </div>
  );
}
export default Modal;
