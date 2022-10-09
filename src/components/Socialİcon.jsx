import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillMail,AiFillGithub} from 'react-icons/ai'
function Socialİcon() {
  const gitHub = 'https://github.com/hasimkilic';
  const linkedin = 'https://www.linkedin.com/in/hasimkilic/';
  const mail = 'mailto:hasimkilic.dev@gmail.com';
  const twitter = "https://twitter.com/HasimK18"
  return (
    <div>
        <div className='text-5xl flex justify-center gap-8 md:gap-20 py-3 text-gray-600 w-full mx-auto'>
            <a href={gitHub} rel="noopener noreferrer" target="_blank"><AiFillGithub className='text-black dark:text-white hover:opacity-75 hover:scale-110 hover:transition-all hover:ease-linear'/></a>
            <a href={twitter} rel="noopener noreferrer" target="_blank"><AiFillTwitterCircle className='text-[#00acee] hover:opacity-75 hover:scale-110 hover:transition-all hover:ease-linear'/></a>
            <a href={linkedin} rel="noopener noreferrer" target="_blank"><AiFillLinkedin className='text-[#0e76a8] rounded hover:opacity-90 hover:scale-110 hover:transition-all hover:ease-linear'/></a>
            <a href={mail} rel="noopener noreferrer" target="_blank"><AiFillMail className='text-[#EF4444] hover:opacity-75 hover:scale-110 hover:transition-all hover:ease-linear'/></a>
        </div>
    </div>
  )
}
export default Socialİcon;
