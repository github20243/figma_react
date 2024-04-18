import css from "./End.module.css"
import root from "../assets/img/autumn-goodman-242825.png"


const End = () => {
  return (
    <div className={css.container}>
      <img className={css.photo} src={root} alt="" />
      <p className={css.text}>SOME INFO</p>
      <p className={css.text_2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
      <p className={css.text_3}>ENFOLD HEALTH</p>
      <p className={css.text_4}>Main Street 1, Olcott
Buffalo, United States

+555 283 784 333
<span className={css.text_5}>office@enfold-health.com</span></p>
    <p className={css.text_6}>OFFICE HOURS</p>
    <p className={css.text_7}>Mo-Fr: 8:00-19:00
Sa: 8:00-14:00
Su: closed</p>
    </div>
  )
}

export default End
