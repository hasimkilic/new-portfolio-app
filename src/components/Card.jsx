import React from 'react'
import {FaCss3Alt,FaHtml5,FaJsSquare,FaReact,FaVuejs,FaFigma} from 'react-icons/fa'
import {FcCompactCamera} from "react-icons/fc"

function Header() {
  return (
    <div>
      <section>
          <div>
            <h3 className='text-3xl py-1 font-semibold text-gray-800 dark:text-teal-100'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
            You can take a look at the <span className='text-teal-600'>services</span> I provide below.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg dark:shadow-md dark:shadow-white p-10 rounded-xl my-10 dark:bg-white'>
              <img src={require('../assets/design.png')} alt="design" className='w-48 h-48 mx-auto'/>
              <h3 className='text-lg lg:text-2xl font-medium pt-8 pb-2 '>Beautil Designs</h3>
              <p className='py-2 leading-8'>I am developing myself in the field of <span className='text-teal-600'>design</span> that I am interested in and I am working in this field. In particular, I believe in colors, the harmony of colors, the feelings and emotions that the color arouses in people. Another issue is that besides the <span className='text-teal-600'>compatibility of these colors</span>, I make designs by giving importance to the <span className='text-teal-600'>user experience</span>, aiming that the user can use the application comfortably and find what he is looking for very quickly.</p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 flex items-center justify-center relative'><FcCompactCamera className='absolute w-6 h-6 top-0 left-16 mt-1'/><span className=' pl-16 lg:pl-8'>Photoshop</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center relative'><FcCompactCamera className='absolute w-6 h-6 top-0 left-16 mt-1'/><span className='pl-8 lg:pl-0'>Canva</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center relative'><FaFigma className='absolute w-6 h-6 top-0 left-16 mt-1'/><span className='pl-8 lg:pl-0'>Figma</span></p>
            </div>
            <div className='text-center shadow-lg dark:shadow-md dark:shadow-white p-10 rounded-xl my-10 dark:bg-white'>
              <img src={require('../assets/code.png')} alt="code" className='w-48 h-48 mx-auto'/>
              <h3 className='text-lg lg:text-2xl font-medium pt-8 pb-2'>Clean Code</h3>
              <p className='py-2 leading-8'>I am in the process of improving myself in the coding part, I take care to write <span className='text-teal-600'>clean code</span> and work with the logic of "<span className='text-teal-600'>Less code is more work</span>" and I develop myself in this way. I do not hesitate to use <span className='text-teal-600'>new technologies</span> and continue to progress by keeping up with today's technologies.Below you can see the technologies that I actively use for <span className='text-teal-600'>frontend development</span>.</p>
              <h4 className='py-4 text-teal-600'>Code languages I use</h4>
              <p className='text-gray-800 py-1 flex items-center justify-center mr-4'><FaHtml5 className='w-6 h-6 ml-3 fill-[#E34C26]' /><span className='ml-4'>Html</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center mr-4'><FaCss3Alt className='w-6 h-6 mr-3 fill-[#004CE8]'/><span>Css</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center mr-4'><FaJsSquare className='w-6 h-6 ml-12 fill-[#FCDC00]'/><span className='pl-3'>Javascript</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center mr-4'><FaReact className='w-6 h-6 ml-4 fill-[#61DAFB]'/><span className='pl-4'>React</span></p>
              <p className='text-gray-800 py-1 flex items-center justify-center mr-4'><FaVuejs className='w-6 h-6 ml-5 fill-[#42B883]'/><span className='pl-4'>VueJs</span></p>
            </div>
            <div className=' text-center shadow-lg dark:shadow-md dark:shadow-white p-10 rounded-xl my-10 dark:bg-white'>
              <img src={require('../assets/consulting.png')} alt="consulting" className='w-48 h-48 mx-auto' />
              <h3 className='text-lg lg:text-2xl font-medium pt-8 pb-2'>Hard Work</h3>
              <p className='py-2 lg:w-64  leading-8'>I learn this job with pleasure and <span className='text-teal-600'>enjoyment</span>, and I don't think that this pleasure will ever end. By continuing in this way, I aim to reach high places in this field, to take part in <span className='text-teal-600'>important projects</span> and to contribute to them.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Header