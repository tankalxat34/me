import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Navbar.module.sass";
import c from "../../utils/classnames";

const Navbar = () => {
  return (
    <nav className={c(styles.navbar)}>
      <a href="mailto:tankalxat34@gmail.com" className={styles.logo}>
        <MdOutlineEmail className={styles.logoImg} />
        tankalxat34@gmail.com
      </a>

      <div>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to={"contacts"}>Contacts</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
