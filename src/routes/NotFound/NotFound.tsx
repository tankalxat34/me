import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <h1>
      This page was not found! Would you go to the
      <Link to={"/"}>main page</Link>?
    </h1>
  );
};

export default Notfound;
