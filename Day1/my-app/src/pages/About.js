import React from 'react'
import Line from '../Component/Line'
import './about.css'

function About() {
  return (
    <div className='about'>

      <div className='about1'>
      <Line/>  <h1 className='heading'>About Us</h1> <Line/>
      </div>

      <div className='about2'>
        <p className='about-wellText'>
          Welcome to Numetry Technologies!
        </p>
        <p className='about-text'>
          At Numetry Technologies, we believe in the power of innovation to drive success. Founded in 2023, our company started with a simple but bold idea: to provide cutting-edge solutions that help businesses thrive in an ever-changing digital world. What began as a small team of passionate professionals has since grown into a leader in [industry/niche], serving customers around the world.

          Our mission is to make complex challenges simpler. We deliver App and Website Development that empower businesses to grow, evolve, and stay ahead of the competition. Whether you're a small startup or a large enterprise, we understand that every business has unique needs, and we’re here to tailor solutions that work specifically for you.

          Our Vision
        </p>
      </div>

    </div>
  )
}

export default About