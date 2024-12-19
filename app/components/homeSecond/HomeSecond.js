import React, { useEffect } from 'react'
import "./homeSecond.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homegrids from '../homeGrid/Homegrids';

const HomeSecond = () => {

  useEffect(() => {
    AOS.init(
      {duration: 2000,once: true,}
    );
  }, [])

  return (
    <section className='relative z-30 space-y-20 sm:space-y-40'>

    <div className='home-second-div' >
        <h1 data-aos="fade-up" className='text-6xl sm:text-9xl font-extrabold text-[#f4e7d4]' >
        Innovative and scalable digital solutions through cutting-edge technology and seamless user experience design.
        </h1>
    </div>
    <Homegrids/>
    </section>
  )
}

export default HomeSecond