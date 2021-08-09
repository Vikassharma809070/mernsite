import React from 'react'

const Loginfrom = () => {
    return (
        <>
            <from className="register_from" id="register_from">
                
                <div className="from-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                    
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    name="email"
                    id="email"
                  />
                </div>
                
                
                <div className="from-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your password"
                    autoComplete="off"
                    name="password"
                    id="password"
                  />
                </div>
               
                <div className="from-group from_button ">
                    <input type="submit" name="submit" id="submit" value="Login in" />
                </div>
              </from>
        </>
    )
}

export default Loginfrom
