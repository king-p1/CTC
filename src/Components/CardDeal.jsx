import styles,{layout} from "../style"
import { card } from "../assets"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Build Your Network <br className="sm:block hidden" /> in few easy
        steps.
</h2>

<p className={`${styles.paragraph} max-w-[480px] mt-5`}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio natus quas omnis deserunt impedit.
</p>
<br />
<Button styles={`mt-10`}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal