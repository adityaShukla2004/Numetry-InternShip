import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { MdDehaze } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function NavBar() {
    const [toggle,setToggle] = useState(false);

    const hundelClick = ()=>{
        setToggle(!toggle);
    }
    return (
        <>
            <div id='nav'>
                <div className='logo'>
                    <Link to='/home' className='logoText'>NUM<span className='span1'>ETRY</span><span className='span2'> TECH</span></Link>
                </div>
                <div className={toggle? 'navMob':'navWeb'}>
                    <div className='navLink1'>
                        <Link to='/' className='linkText'>Home</Link>
                        <Link to='/about' className='linkText'>About</Link>
                        <Link to='/contact' className='linkText'>Contact Us</Link>
                    </div>
                    <div className='navLink2'>
                        <Link to='/login' className='login' >
                           Login
                        </Link>
                    </div>
                </div>
                 <div className='res-nav'>
                      <button onClick={hundelClick} className='iconButton'>
                        {
                            toggle?<RxCross2 />:<MdDehaze />
                        }  
                      </button>
                 </div>
            </div>
        </>
    )
}

export default NavBar