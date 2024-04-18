import css from "./Header2.module.css"
import girl from "../assets/img/christopher-campbell-40367.svg"

const Header2 = () => {
  return (
    <div className={css.container}>
        <p className={css.text}>Why Thrive?</p>
        <p className={css.text_2}>Want to improve your well-being from the comfort <br /> of your own couch? Are you having trouble finding <br /> the right therapist? <span className={css.text_3}> Here at ThriveTalk, our licensed <br /> therapists provide the same quality care you would get in office <br /> from anywhere you can access your laptop or mobile phone. <br /> Become your best self with ThriveTalk.  Start therapy now with a <br /> licensed therapist!</span> </p>
        <img className={css.girl_photo} src={girl} alt="" />
    </div>
  )
}

export default Header2
