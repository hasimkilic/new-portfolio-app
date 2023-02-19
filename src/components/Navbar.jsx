import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Navbar({darkMode,setDarkMode}) {
    const cvDownload = () =>{
        window.location.href = "https://drive.google.com/file/d/1fnQu776CDFrdbDXnnV3VTVkDany8cBuS/view?usp=share_link"
    }
return (
    <div>
        <nav className='pt-10 pb-8 border-b-2 border-teal-100 dark:border-gray-800 mb-12 flex justify-between items-center'>
            <p>
                <img src={require('../assets/HaşimkLogo.png')} className="h-10 w-10" alt="logo"/>
            </p>
            <h1 className='text-2xl  dark:text-white font-mono md:ml-10'>HaşimK</h1>
            <ul className='flex items-center'>
                <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                </li>
                <li>
                <button onClick={cvDownload} className='font-burtons bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-4 md:ml-8'>Resume</button>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar;
