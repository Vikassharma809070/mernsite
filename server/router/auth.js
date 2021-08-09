const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../modal/userSchema");
// require("../db/conn");
// const user = require('../model/userSchema');

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});

router.get("/dummy", (req, res) => {
  res.send([12,32,434,5,35,]);
});

router.post("/register", async (req, res) => {
  const { name, email, mobile, work, password, cpassword } = req.body;
console.log(req.body)
  // if (!name || !email || !phone || !work || !password || !cpassword) {
  //   return res.status(200).json({ error: "plz filled the field Properly" });
  // }
  try {
    const userExit = await User.findOne({ email: email });

    if (userExit) {
      return res.status(200).json({ error: "email already Exits" });
    } else if (password != cpassword) {
      return res.status(200).json({ error: "password are not matching" });
    } else {
    await User.create({ name, email, phone:Number(mobile), work, password, cpassword });
    

    res.status(201).json({ message: "user registred sucessfully" });
  }
  } catch (err) {
    console.log(err);
    return res.status(200).json({ error: "something went wrong" });

  }
});

router.get("/get-user/list", async(req,res)=>{
  try{
      let getAllUser = await User.find({});
          res.status(200).json({
            status:200,
            message:"flag1",
            data:getAllUser
          })
  }catch(error){
    res.status(400).json({
      message:"flag0"
    })
  }
})

router.post("/singin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"awsome"});

  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz Filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    //compare password same or not.
     if(userLogin){
      const iMatch = await bcrypt.compare(password,userLogin.password);

      // using jwt
//       // userLogin.generateAuthToken is Return A promise So use Await.
//       const token = await userLogin.generateAuthToken();
//       console.log(token);
   
//       if (!iMatch) {
        
//         res.status(400).json({ error: "can not find user pass" });
//         //or
//         // res.status(400).json({ error: "can not find user" });
//       } else {
//         res.json({ message: "user Sigin sucessfully" });
//       }
//      }else{
//       res.json({ message: "Invalid Creditails" });
//      }

    
//   } catch (err) {
//     console.log(err);
//   }
// });
// module.exports = router;

// Store Jwt Token
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now() + 25982000000),
        httpOnly:true
      })
   
      if (!iMatch) {
        
        res.status(400).json({ error: "can not find user pass" });
        //or
        // res.status(400).json({ error: "can not find user" });
      } else {
        res.json({ message: "user Sigin sucessfully" });
      }
     }else{
      res.json({ message: "Invalid Creditails" });
     }

    
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;