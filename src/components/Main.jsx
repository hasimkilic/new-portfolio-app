import React from 'react'

function Main() {
  const ecommerce = "https://github.com/hasimkilic/E-Commerce-Project";
  const portfolio = "https://github.com/hasimkilic/hasimkilic-portfolio-app";
  const timeline = "https://github.com/hasimkilic/timeline-project-vue";
  const timeline2 = "https://github.com/hasimkilic/timeline-project-2-vue";
  const temperature ="https://github.com/hasimkilic/temperature-by-mood";
  return (
    <div>
      <section className='mb-4'>
          <div>
            <h3 className='text-3xl py-1 text-gray-800 font-semibold dark:text-teal-100'>
              Projects
            </h3>
            <p className='py-2 dark:text-white'>In this section, I showed <span className='text-teal-600'>one-page images</span> of the projects I have done below. You can go to the relevant project by <span className='text-teal-600'>clicking on the image</span> to examine the source codes and the project in detail.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={ecommerce} rel="noopener noreferrer" target="_blank"><img src={require('../assets/HomePageLinkedin.png')} alt="e-commerce-home" className='rounded-3xl object- w-full h-full lg:max-h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={ecommerce} rel="noopener noreferrer" target="_blank"><img src={require('../assets/ProductDetailLinkedin.png')} alt="e-commerce-product" className='rounded-3xl object-top-cover w-full h-full lg:h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={portfolio} rel="noopener noreferrer" target="_blank"><img src={require('../assets/portfolio-app-foto.png')} alt="portfolio-app" className='rounded-3xl object-top-cover w-full h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={timeline} rel="noopener noreferrer" target="_blank"><img src={require('../assets/timeline-project.png')} alt="timeline-project" className='rounded-3xl object-top-cover w-full h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={timeline2}  rel="noopener noreferrer" target="_blank"><img src={require('../assets/TimelineProject-2.png')} alt="timeline-project-2" className='rounded-3xl object-top-cover w-full h-full lg:h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
              <div className='basis-1/3 flex-1 border dark:border-none rounded-3xl cursor-pointer shadow-lg dark:shadow-white dark:shadow-md'><a href={temperature} rel="noopener noreferrer" target="_blank"><img src={require('../assets/temperature-by-mood.png')} alt="temperature-by-mood" className='rounded-3xl object-cover w-full h-96 hover:transition-all hover:ease-linear hover:scale-105'/></a></div>
          </div>
        </section>
    </div>
  )
}

export default Main