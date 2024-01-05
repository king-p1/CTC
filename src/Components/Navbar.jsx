import { useState } from "react"
import {close,menu} from '../assets'
import {navLinks} from '../Constants'

const Navbar = () => {
  const [toggle,setToggle] =useState(false)
  return (
    <nav className="ww-full flex py-6 justify-between items-center navbar">
         <i className='bx bx-atom bx-spin mr-2' style={{color:'white',fontSize:'40px'}}></i>
<h2 className="text-white" id="ctc">CTC</h2>
<ul className="list-none sm:flex hidden justify-end items-center flex-1">
  {navLinks.map((nav,index)=>(
    <li key={nav.id}
    className={`font-poppins font-normal cursor-pointer text-[16px] 
    ${index === navLinks.length -1 ?' mr-0 ': 'mr-7'} text-white `}
    >
<a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>

<div className="sm:hidden flex flex-1 justify-end items-center">
  <img src={toggle ? close : menu} 
  className="w-[28px h-[28px] object-contain"
  onClick={()=> setToggle(!toggle)}
  />
<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

<ul className="list-none flex  flex-col justify-end items-center flex-1">
  {navLinks.map((nav,index)=>(
    <li key={nav.id}
    className={`font-poppins font-normal cursor-pointer text-[16px] 
    ${index === navLinks.length -1 ?' mr-0 ': 'mb-4'} text-white `}
    >
<a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>
</div>


</div>

    </nav>
  )
}

export default Navbar