import styles,{layout} from "../style"
import { team } from "../assets"
// import Button from "./Button"

const Team = () => {
  return (
    <section className={layout.section} id="team">

<div className={layout.sectionImg}>
        <img src={team} className='w-[100%] h-[100%]' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Team of Experts  <br className="sm:block hidden" /> are always available.
</h2>

<p className={`${styles.paragraph} max-w-[480px] mt-5`}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odio natus quas omnis deserunt impedit.
</p>
{/* <Button styles={`mt-10`}/> */}
      </div>

     
    </section>
  )
}

export default Team