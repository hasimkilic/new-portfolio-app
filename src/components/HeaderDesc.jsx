import React from 'react'

function HeaderDesc({title}) {
  return (
    <div>
        <div className='text-center p-6'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium mb-2 md:mb-4 md:text-6xl font-mono'>Haşim Kılıç</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-teal-100 font-burtons'>{title}</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-teal-100 md:text-lg font-burtons'>
                I am developing myself in the field of <span className='text-teal-600'>Front End</span>, which I continue to learn with love and enjoyment and I am working to specialize in this field. I also do designs in the web field.
                I like to work with the team, with the <span className='text-teal-600'>agile</span> working method, with the division of labor.
            </p>
        </div>
    </div>
  )
}

export default HeaderDesc;