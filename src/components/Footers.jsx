import css from "./Footers.module.css"
import { Div } from "./UI/blocks2/Block2"

  
const Footers = () => {
  return (
    <div className={css.container}>
      <Div className="block_1"><div className={css.line}></div><p className={css.text}>Physical Health</p><div className={css.dot}></div></Div>
      <Div className="block_2"><div className={css.line}></div><p className={css.text}>Gymnastics</p><div className={css.dot}></div></Div> 
      <Div className="block_3"><div className={css.line}></div><p className={css.text}>Crossfit</p><div className={css.dot}></div></Div> 
      <Div className="block_4"><div className={css.line}></div><p className={css.text}>Aerobics</p><div className={css.dot}></div></Div> 
      <Div className="block_5"><div className={css.line}></div><p className={css.text}>Nutrition</p><div className={css.dot}></div></Div> 
    </div>
  )
}

export default Footers
