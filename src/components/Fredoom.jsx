import css from './Fredoom.module.css'
import { Button } from './UI/button/Button'

const Fredoom = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>Thrivetalk</p>
      <div>
        <ul className={css.li}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
            <div className={css.hr}>
         <hr />
         <Button className="button3">CONTACT US</Button>
         </div>
      </div>
      
    </div>
  )
}

export default Fredoom
