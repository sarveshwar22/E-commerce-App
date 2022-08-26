import React from 'react'
import './signIn.css'

const signUp = () => {
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
                            <input type="text" name='fname' id='fname'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Email</label>
                            <input type="text" name='email' id='email'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Phone Number</label>
                            <input type="text" name='mobile' id='mobile'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Password</label>
                            <input type="text" name='password' id='password' placeholder='At least 6 digits'/>
                        </div>
                        
                        <div className="form_data">
                            <label htmlFor=''>Re-Enter Password</label>
                            <input type="text" name='password' id='password'/>
                        </div>
                        
                        
                        <button className="signin_btn">Sign Up</button>
                        
                        
                    </form>
                </div>
                
                
            </div>
        </section>
    </>
  )
}

export default signUp