import styles from "./Section.module.sass";
import c from "../../utils/classnames";

interface ISectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fullHeight?: boolean;
  halfHeight?: boolean;
}

const Section = (props: ISectionProps) => {
  const classnames = c(
    styles.section,
    props.className || "",
    props.fullHeight ? styles.h100 : "",
    props.halfHeight ? styles.h50 : ""
  );
  return (
    <div className={classnames}>
      <div className={c(styles.body)}>{props.children}</div>
    </div>
  );
};

export default Section;
