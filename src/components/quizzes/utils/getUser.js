import axios from "axios";
const getUser = async () => {
  await axios
    .get("http://localhost:5000/quizzes/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export default getUser;
