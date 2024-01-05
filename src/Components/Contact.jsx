import styles,{layout} from "../style"
import { contact } from "../assets"
import ButtonTwo from "./ButtonTwo"
const Contact = () => {
  return (
    <section className={layout.section} id="contact">
<div className={layout.sectionImg}>
        <img src={contact} className='w-[100%] h-[100%]' />
      </div>

      <div className={layout.sectionInfo}>
      <input type="text"  className={`${styles.heading2} text-blue-800 rounded-[10px] p-2`} placeholder=" Name" />
      <br className="sm:block " /> 
      <input type="email"  className={`${styles.heading2} text-blue-800 rounded-[10px] p-2`} placeholder=" Email Address"/>
      <br className="sm:block " /> 

      <textarea  className={`${styles.heading3} text-blue-800 rounded-[10px] p-2`} placeholder=" Enter Your Message Here">
      </textarea>
<br className="sm:block " /> 
<ButtonTwo styles={`mt-10`}/>
      </div>        
    </section>
  )
}

export default Contact