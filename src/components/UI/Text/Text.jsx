
import css from "./Text.module.css"

export const Div = ({ children, className }) => {
    return <div className={css[className]}>{children}</div>;
  };