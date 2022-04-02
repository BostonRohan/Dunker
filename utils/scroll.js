import { scroller } from "react-scroll";
const scroll = (section, delay) => {
  return scroller.scrollTo(section, {
    smooth: true,
    delay: open ? 500 : 0,
  });
};
export default scroll;
