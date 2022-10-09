import React from 'react'

function Avatar() {
  return (
    <div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full dark:shadow-lg dark:shadow-teal-100 mx-auto w-80 h-80 overflow-hidden mt-10 mb-5 md:h-96 md:w-96'>
            <img src={require('../assets/hasimk-avatar.png')} alt="avatar" className='object-contain pt-12'/>
        </div>
    </div>
  )
}

export default Avatar