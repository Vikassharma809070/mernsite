import React from 'react';
import signup_img from "../Images/Signup.png";
import {NavLink} from "react-router-dom";
import Loginfrom from './Loginfrom';


const Login = () => {
    return (
        <>
        <section className="signup">
        <div className="container mt-5">
        
          <div className="signup_content">
          <div className="signup-image">
                <figure>
                    <img src={signup_img} alt="signup img" />
                </figure>
                <NavLink to="/signin" className="signup-image-link"> Create a Account </NavLink>
            </div>
            <div className="signup_from">
              <h1 className="from_title">Sign in  </h1>
              <Loginfrom/>
            </div>
            
          </div>
        </div>
      </section>
    
        </>
    )
}

export default Login
