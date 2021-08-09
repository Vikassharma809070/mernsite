import React from "react";
import signup from "../Images/Signup.png";
// import {NavLink} from "react-router-dom";

const About = () => {
  return (
    <>
     <div className="container emp-profile">
      <from>
        <div className="row">
          <div className="col-md-4">
           <img src={signup} alt="Img" className="w-50" />
          </div>
          <div className="col-md-6">
             <div className="profile_head">
               <h5>Vikas Sharma</h5>
               <h6>Web Devloper</h6>
              <p className="profile-rating mt-3 mb-5 ">RAKINGS: <span>2/10</span></p>

               <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab"   href="#home" role="tab">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" id="profile-tab" data-toggle="tab"   href="#profile" role="tab">TimeLine</a>
              </li>
              
            </ul>
             </div>
           </div>
           <div className="col-md-2">
             <input type="submit" className="profile-edit-btn"  name="btnAddMore" value="Edit Profile"/>
           </div>

          
        </div>
      <div className="row">
      {/* Left Side  */}
        <div className="col-md-4">
          <div className="profile-work">
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
            <p><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube </a></p>
          </div>
        </div>
        <div className="col-md-8 pl-5 about-info">
             <div className="tab-content profile-tab" id="myTabContent">
               <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                 <div className="row mt-3">
                   <div className="col-md-6 ">
                     <label>User ID </label>
                   </div>
                   <div className="col-md-6">
                     <p>67987987789980089</p>
                   </div>
                 </div>
                 <div className="row mt-3">
                   <div className="col-md-6">
                     <label>Name :  </label>
                   </div>
                   <div className="col-md-6">
                     <p>Vikas Sharma</p>
                   </div>
                 </div>
                
                
               </div>
               <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile">
               <div className="row mt-3">
                   <div className="col-md-6 ">
                     <label>Exprience </label>
                   </div>
                   <div className="col-md-6">
                     <p>Expert</p>
                   </div>
                 </div>
               </div>
             </div>
        </div>
      </div>

      </from>
     </div>
     
    </>
  );
};

export default About;
