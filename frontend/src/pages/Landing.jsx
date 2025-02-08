import React from 'react'
import Landingnav from '../components/Landingnav'
import Aurora from '../components/Aurora';

const Landing = () => {
  return (
    <div className='min-h-screen w-full absolute '>
  <Aurora
    className="w-full h-screen relative"
    colorStops={["#502fa8", "#43288a", "#28185d"]}
    speed={0.6}
  />
        <Landingnav/>
    </div>  
  )
}

export default Landing