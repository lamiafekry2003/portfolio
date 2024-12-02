
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/about-BgAkqdr2.jpg'
import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
   <div>
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0  z-10 h-full bg-neutral-100  w-64 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out `}
        >
          <div className=" flex justify-center items-center pt-14">
            <img src={img1} alt="" className=' rounded-full w-36 h-36'/>
          </div>
          <div className=' text-center my-4'>
            <a to='#' className=' text-2xl font-extrabold font-serif'>Jackson Ford</a>
            <p className=' pt-2 text-neutral-600 text-sm'> <span className='text-blue-500 '>UI/UX/Designer</span> in Philippines</p>
          </div>
          <ul className="mt-8 space-y-4 px-4 text-neutral-600">
            <li className=" ">
              <NavLink to="">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="">
              <NavLink to="skills">Skills</NavLink>
            </li>
            <li className="">
              <NavLink to="experience">Experience</NavLink>
            </li>
            <li className="">
              <NavLink to="work">Work</NavLink>
            </li>
          </ul>
         
        </div>
  
        {/* Hamburger Button (visible only on mobile) */}
        <button
          className="fixed top-4 left-4 z-20 border-2 px-3 border-stone-500 text-stone-500 p-2 rounded-md focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

     
    );
}