import css from './Button.module.css'
export const Button = ({ children, className }) => {
  return <button className={css[className]}>{children}</button>;
};