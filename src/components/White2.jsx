import css from "../components/White2.module.css"
import { Div } from "./UI/Block/Blcok.jsx"

const White2 = () => {
  return (
    <div className={css.container}>

      <Div className="div1"><div className={css.hr_div_1}></div><div className={css.dot_1}></div><p className={css.tex_1}>Weight Lifting</p>
      </Div>

      <Div className="div2"><div className={css.hr_div_2}></div><div className={css.dot_2}></div><ul  className={css.tex_2}>Running  & <br /> Spinning</ul>
      </Div>

      <Div className="div3"><div className={css.hr_div_3}></div><div className={css.dot_3}></div><p className={css.tex_3}>Pumping Iron</p>
      </Div>

      <Div className="div4"><div className={css.hr_div_4}></div><div className={css.dot_4}></div><p className={css.tex_4}>Pumping Iron <span className={css.texts}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</span></p>
      </Div>

    </div>
  )
}

export default White2
