import css from "./Texts.module.css"
import { Div } from "./UI/Text/Text.jsx"


const Texts = () => {
  return (
    <div className={css.container}>
      <Div className="block_text_1"><p>Nutritional Plans</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
      <Div className="block_text_2"><p>Weight Loss</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
      <Div className="block_text_3"><p>Mental Peace</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
      <Div className="block_text_4"><p>Home Training</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
      <Div className="block_text_5"><p>Work/Life Balance</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
      <Div className="block_text_6"><p>Cardio</p> <p className={css.text}>Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.</p> </Div>
    </div>
  )
}

export default Texts
