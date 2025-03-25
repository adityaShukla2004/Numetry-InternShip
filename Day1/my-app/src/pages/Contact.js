import React from 'react'
import './contact.css'
import Line from '../Component/Line'

function Contact() {
  return (
    <div className='contact'>

        <div className='contact1'>
                
                  <div className='con-1'>
                    <Line/>
                        <h2>Contact Us</h2>
                    <Line/>
                  </div>
                  <div className='con-2'>
                    <p>
                       If you want to connect with us please fill the form.
                       Be Authentic: Visitors want to know the real story behind your company. Be transparent about your journey.
                    </p>
                  </div>
        </div>

        <div className='contact2'>
            <form className='con-form'>
                 <div className='form1'>
                     <input type='text' placeholder='First Name'/>
                     <input type='text' placeholder='Last Name'/>
                 </div>
                 <div className='form2'>
                      <input type='email' placeholder='Email'/>
                      <textarea rows={2} placeholder='Massage'></textarea>
                      <input type='button' value='Submit' className='submit'/>
                 </div>

               

            </form>
              
        </div>


    </div>
  )
}

export default Contact