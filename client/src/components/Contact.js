import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between mt-5">
                        {/* phone number */}
                        <div className="contact_info_item">
                            <img src="https://img.icons8.com/windows/32/000000/iphone.png" alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text"> +91 8965348798</div>
                            </div>
                        </div>
                        <div className="contact_info_item">
                            <img src="https://img.icons8.com/windows/32/000000/email.png" alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text"> Vikas@gmail.com</div>
                            </div>
                        </div>
                        <div className="contact_info_item">
                            <img src="https://img.icons8.com/windows/32/000000/address.png" alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Adress
                                </div>
                                <div className="contact_info_text"> Hajipur,Bihar </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
         {/* contact us From */}
         <div className="contact_from">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <div className="contact_from_container py-5">
                                            <div className="contact_from_title">
                                                Get In Touch
                                            </div>
                                            <form id="contact_from">
                                                <div className="contact_from_name d-flex justify-content-between align-items-center">
                                                 <input type="name" id="contact_from_name" className="contact_from_name input_field" placeholder="Your name" required="true"/>    
                                                 <input type="email" id="contact_from_email" className="contact_from_email input_field" placeholder="Enter Your  Email" required="true"/>    
                                                 <input type="number" id="contact_from_number" className="contact_from_number input_field" placeholder="Enter Your Number" required="true"/>    
                                                   
                                                </div>
                                                <div className="contact_from_text mt-5 ">
                                                    <textarea className="text_field contact_from_message" placeholder="Message" cols="30" rows="10"></textarea>
                                                </div>
                                                <div className="contact_from_button">
                                                    <button type="submit" className="button contact_submit_button mt-5 ">Send Message</button>
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default Contact;
