import React from "react";
import c from "../../utils/classnames";
import styles from "./Button.module.sass";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  dark?: boolean;
  rightIcon?: boolean;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={c(
        styles.btn,
        props.dark ? styles.dark : "",
        props.rightIcon ? styles.rightIcon : ""
      )}>
      {props.children}
    </button>
  );
};

export default Button;
