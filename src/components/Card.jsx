import css from "./Card.module.css"
import logo from "../assets/img/linkedin-sales-navigator-402831.svg"

const Card = () => {
  return (
    <div className={css.container}>
      <img className={css.photo} src={logo} alt="" />
      <p className={css.text}>YOU SHOULD ALSO KNOW</p>
      <p className={css.text_2}>MDD affects more than 16.1 million <br /> American adults, or about 6.7%of the U.S. <br /> population age 18 and older in a given year. <br /> We at <span className={css.text_span}> ThriveTalk </span>  can help you.</p>
      <p className={css.text_3}>GET HELP NOW</p>
    </div>
  )
}

export default Card