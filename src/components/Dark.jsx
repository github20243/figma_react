import css from "./Dark.module.css"
import foto from "../assets/img/charles-etoroma-390119.png"


const Dark = () => {
  return (
    <div className={css.container}>
        <p className={css.text}>CONTACT US</p>
        <p className={css.text_2}>Ready. Set. Smile</p>
        <p className={css.text_3}>Take the free online assessment to <br /> see if you are a candidate and get <br /> started on your journey.</p>
        <p className={css.text_4}>GET HELP NOW</p>
        <img className={css.photo} src={foto} alt="" />
    </div>
  )
}

export default Dark
