import React, { useState } from 'react';
import signup_img from "../Images/Signup.png";
import {NavLink, useHistory} from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  const [user,setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    work:"",
    password:"",
    cpassword:"",
  });
  
  let name,value;
 

  const handleinputs=(e)=>{
      // console.log(e);
      name= e.target.name;
      value= e.target.value;
      setUser({...user,[name]:value});
  };
  
  const PostData= async(e)=>{
      e.preventDefault();
      const{name,email,phone,work,password,cpassword}=user;
      console.log(user);
      // const res = await fetch("/register",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body: JSON.stringify({
      //     name,email,phone,work,password,cpassword
      //   })
      // });
      // const data = await res.json();

      // if(data.status === 422 || !data) {
      //   window.alert("Invalid Registration");
      //   console.log("Invalid Registration");
      // } else{
      //   window.alert(" Registration Sucessfull");
      //   console.log("  Sucessfull Registration");
      //   history.push("/login");
      // }
      try{

        let createUser  = await axios({
          url:"/register",
          method:"POST",
          data:user
        })
        // -------here redirect your path --------- TODO:
        console.log(createUser.data)
      }catch(error){
        console.log(error);
      }
  }
 return (
    <>
     <section className="signup">
        <div className="container mt-5">
          <div className="signup_content">
            <div className="signup_from">
              <h1 className="from_title">Signup</h1>
              <from method="POST"  className="register_from" id="register_from">
                <div className="from-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    name="name"
                    value={user.name}
                    onChange={handleinputs}
                    id="name"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                    
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    name="email"
                    value={user.email}
                    onChange={handleinputs}
                    id="email"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="mobile">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Number"
                    autoComplete="off"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleinputs}
                    id="mobile"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="profession">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your profession"
                    autoComplete="off"
                    name="work"
                    value={user.work}
                    onChange={handleinputs}
                    id="profession"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your password"
                    autoComplete="off"
                    name="password"
                    value={user.password}
                    onChange={handleinputs}
                    id="password"
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your cpassword"
                    autoComplete="off"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleinputs}
                    id="cpassword"
                  />
                </div>
                <div className="from-group from_button ">
                    <input type="submit" name="submit" id="submit" value="Submit" onClick={PostData} />
                </div>
              </from>
            </div>
            <div className="signup-image">
                <figure>
                    <img src={signup_img} alt="signup img" />
                </figure>
                <NavLink to="/login" className="signup-image-link"> I am already registered </NavLink>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Signup;
