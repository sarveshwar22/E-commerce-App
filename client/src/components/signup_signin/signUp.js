import React from 'react'
import { NavLink } from 'react-router-dom'
import './signIn.css'
import { useState } from 'react'

const SignUp = () => {
    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });
    
    const addData = (e)=>{
        const {name,value} = e.target;
        
        setUdata(()=>{
            return {...udata,
                [name]:value
                }
            })
    }
    
  return (
    <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <h1>TechZen</h1>
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign Up</h1>
                        
                        <div className="form_data">
                            <label htmlFor=''>Your Name</label>
                            <input type="text" onChange={addData} value={udata.fname} name='fname' id='fname'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Email</label>
                            <input type="text" onChange={addData} value={udata.email} name='email' id='email'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Phone Number</label>
                            <input type="text" onChange={addData} value={udata.mobile} name='mobile' id='mobile'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Password</label>
                            <input type="text" onChange={addData} value={udata.password} name='password' id='password' placeholder='At least 6 digits'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Re-Enter Password</label>
                            <input type="text" onChange={addData} value={udata.cpassword} name='cpassword' id='cpassword'/>
                        </div>
                        
                        
                        <button className="signin_btn">Sign Up</button>
                        
                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign In</NavLink>
                        </div>
                    </form>
                </div>
                
                
            </div>
        </section>
    </>
  )
}

export default SignUp