import React from 'react'
import Home from '../../assets/Icon/home.svg'

interface Sidebar {
    src: string;
    alt: string;
    text: string;
}

const addClass = () =>{
    
}
const SidebarOptions = (props: Sidebar) => {
    
  return (
    <div className='flex gap-5 items-center' >
      <div className={`bg-sidebar-gray p-1 rounded-lg w-8 h-8`}>
        <img className='w-full h-full'  src={props.src} alt={props.alt}></img>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default SidebarOptions
