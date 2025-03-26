import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <div className='home'>
                <div className='home1'>
                    <h1 className='wellText'>
                        WELCOME IN NEMETRY TECHNOLOGIES
                    </h1>
                    <p className='text'>We create good products in all over india...</p>
                </div>

                <div className='home2'>
                    <Link to='/signup'>
                    <button className='button'>
                        Get Started
                    </button>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default Home