import React, {useState} from 'react'
import {FaMinus, FaPlus} from "react-icons/fa"
const Accordion = ({title,content}) => {
    const [accordionOpen , setAccordionOpen]=useState(false)
  return (
    <div >
        <button onClick={()=> setAccordionOpen(!accordionOpen)} className={`p-2 text-[#1F3C54] poppins-semibold  outline-none px-4 flex justify-between items-center w-full ${accordionOpen ? `border-b border-[#1F3C54]` : ``} `}>
            <span>{title}</span>
            {accordionOpen ? <span><FaMinus/></span> : <span><FaPlus/></span> }
            
        </button>
        <div style={{backgroundImage:"url('./background.jpeg')",backgroundSize:"cover"}} className={`grid px-4 poppins-light py-3 overflow-hidden  rounded-br-md rounded-bl-md  duration-300 transition-all ease-in-out text-white ${accordionOpen ? `grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`}`}>
            <div className='overflow-hidden'>
                {content}
            </div>
        </div>
    </div>
  )
}

export default Accordion