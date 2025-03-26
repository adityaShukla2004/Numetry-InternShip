import React, { useState } from 'react'
import Line from '../Component/Line'
import './signup.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function SignUp() {
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        number:'',
        add:'',
    })

    const onchangeFun =(e)=>{
         const {name,value} = e.target;

         setData({
            ...data,
            [name]:value
         })
    }

    const submitHundeler = async (e)=>{
        e.preventDefault();
        
        // add data to the database
        try {
            const response = await axios.post('http://localhost:5000/adduser',{
                  name:data.name,
                  email:data.email,
                  password:data.password,
                  number:data.number,
                  add:data.add
            })

            if(response.status==201)
            {
                // using a toast for success massage
                toast.success("User created successfully!", {
                  
                    autoClose: 3000,
                  });
               
                console.log(response);
            }

             setData({
                name:'',
                email:'',
                password:'',
                number:'',
                add:''
             })
            console.log(response.data);
        } catch (error) {
            //using a toast for error massage
            toast.error("User connot  created . please check email or password", {
               
                autoClose: 3000, 
              });
        }
        
         
    }
    return (
        <>
            <div className='signUp flexcol'>
              
                <div className='signUp1 flexrow'>

                    <Line />
                    <h2 className='headingText'>SignUP</h2>

                    <Line />
                </div>
                <ToastContainer/>
                <div className='signUp2 flexcol'>

                    <form className='signupForm flexcol' onSubmit={submitHundeler}>

                        <input type='text' placeholder='Name' onChange={onchangeFun} name='name' value={data.name} className='signupInput'/>

                        <input type='email' placeholder='Email' onChange={onchangeFun} name='email' value={data.email} className='signupInput' />
                        <input type='password' placeholder='Password' onChange={onchangeFun} name='password' value={data.password} className='signupInput' />
                        <input type='number' placeholder='Number' onChange={onchangeFun}value={data.number} name='number' className='signupInput' />
                        <input type='text' placeholder='Address' onChange={onchangeFun}value={data.add} name='add' className='signupInput' />
                        <input type='submit' value='Submit' className='signupbtn'/>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp