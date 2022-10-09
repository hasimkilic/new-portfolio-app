import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Navbar({darkMode,setDarkMode}) {
    const cvDownload = () =>{
        window.location.href = "https://doc-0g-6o-apps-viewer.googleusercontent.com/viewer/secure/pdf/kpg22kavh66nt6prr7tokosutnqboc60/0p7mj625o5tes7ervceu6upav12keini/1665328800000/drive/04299464828006830839/ACFrOgAIPq96AkjTmGTTWboT1rZCJbfHfEbW2qAu9U1W5rhFXcqlrSJifHXJKsOgdcWvXeNtCkSLV1B4EmghR84juKQ1tNI4GiDk_LGniktpT-L-1bivxfO-sJAbIeZ3affmpeIshQjzZqIXoS9w?print=true&nonce=2k12ontocq95u&user=04299464828006830839&hash=kllmkrkk79041j3oqba50c1dn81oudnf"
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