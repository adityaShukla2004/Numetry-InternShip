import React from 'react'
import Line from '../Component/Line'
import './login.css'

function Login() {
  return (
    <div className='loginForm'>
            <div className='login1'>
                 <Line/>

                 <h2>Login Hare</h2>

                 <Line/>

            </div>

            <div className='login2'>

                <form>
                    <input type='email' placeholder='Email' className='inputfield'/>
                    <input type='password' placeholder='Password' className='inputfield'/>
                    <input type='submit' value='Login' className='loginBtn'/>
                </form>
            </div>

    </div>
  )
}

export default Login