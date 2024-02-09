import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Navbar.module.sass";
import c from "../../utils/classnames";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={c(styles.navbar)}>
      <a href="mailto:tankalxat34@gmail.com" className={styles.logo}>
        <MdOutlineEmail className={styles.logoImg} />
        tankalxat34
      </a>

      <div className={c(styles.navButtons)}>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to={"portfolio"}>Portfolio</NavLink>
        <NavLink to={"contacts"}>Contact</NavLink>
      </div>

      <RxHamburgerMenu className={c(styles.navBurger)} />
    </nav>
  );
};

export default Navbar;
