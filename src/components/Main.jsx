import css from "./Main.module.css"
import logo from "../assets/img/Mask Group.png"
import { Button } from "./UI/button/Button"


const Main = () => {
  return (
    <div className={css.container}>
      <p className={css.text_2}>Thrivetalk</p>
      <p className={css.text_3}>HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE</p>

      <p className={css.text_4}>Our highly talented therapists can help you <br /> with a range of issues including relationships, <br /> sex, PTSD, depression, social anxiety, or even <br /> just caring for yourself more.</p>
      <Button className="button2">WHAT DO I DO</Button>
      <Button className="button1">WHAT AM I</Button>
      <img className={css.icons} src={logo} alt="" />
    </div>
  )
}

export default Main
