import React from 'react'
import './signIn.css'

const signIn = () => {
  return (
    <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <h1>TechZen</h1>
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign In</h1>
                        <div className="form_data">
                            <label htmlFor=''>Email</label>
                            <input type="text" name='email' id='email'/>
                        </div>
                        
                        
                        
                        <div className="form_data">
                            <label htmlFor=''>Password</label>
                            <input type="text" name='password' id='password'/>
                        </div>
                        
                        
                        <button className="signin_btn">Sign In</button>
                        
                        
                    </form>
                </div>
                
                <div className="create_accountinfo">
                    <p>New to TechZen?</p>
                    <button>Create your TechZen account</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default signIn