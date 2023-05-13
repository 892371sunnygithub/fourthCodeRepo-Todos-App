import React from 'react'
import { useSelector } from 'react-redux'
import AboutCategory from '../components/AboutCategory'
import AboutTable from '../components/AboutTable'

const About = () => {
   
  return (
   <>
    <section className='about_container'>
      <div className=" d-flex justify-content-between">
        <div className="bg-dark text-white  w-25">
          <AboutCategory />
        </div>
        
        <div className="w-75">
          <AboutTable />
        </div>
      </div>
    </section>
   </>
  )
}

export default About;
