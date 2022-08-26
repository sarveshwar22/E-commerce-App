import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import './signIn.css'


const SignIn = () => {

    const [logdata,setData] = useState({
        email:"",
        password:""
    });
    
    const addData = (e)=>{
        const {name,value} = e.target;
        
        setData(()=>{
        return {...logdata,
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
                        <h1>Sign In</h1>
                        <div className="form_data">
                            <label htmlFor=''>Email</label>
                            <input type="text" onChange={addData} value={logdata.email}  name='email' id='email' />
                        </div>
                        
                        
                        
                        <div className="form_data">
                            <label htmlFor=''>Password</label>
                            <input type="text" onChange={addData} value={logdata.password} name='password' id='password' />
                        </div>
                        
                        
                        <button className="signin_btn">Sign In</button>
                        
                        
                    </form>
                </div>
                
                <div className="create_accountinfo">
                    <p>New to TechZen?</p>
                    <NavLink to="/register"><button>Create your TechZen account</button></NavLink>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn