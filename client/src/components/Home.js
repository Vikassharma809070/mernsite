import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {

    useEffect(()=> {
        (async()=>{
            let data = await axios({
                url:"/dummy",
                method:"GET"
            })
            console.log(data.data)
        })();
    }, [])

    return (
        <>
             <div className=" container d-flex justify-content-center align-items-center  min-vh-100 ">
            <h1 className="text-center m-2 pt-5">WelCome to Home Page </h1>
            </div> 
            
        </>
    )
}

export default Home
