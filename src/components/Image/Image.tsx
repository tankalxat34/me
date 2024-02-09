import React from "react";
import styles from "./Image.module.sass";
import c from "../../utils/classnames";

interface IImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  round?: boolean;
}

const Image = (props: IImageProps) => {
  const classnames = c(`${props.className}`, props.round ? styles.round : "");
  return <img src={props.src} alt={props.alt} className={classnames} />;
};

export default Image;
