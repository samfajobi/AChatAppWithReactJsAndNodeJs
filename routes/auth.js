const express = require("express");
const router  = express.Router();
const authModel = require("../models/user")
const jwt = require("jsonwebtoken");



router.post("/signin", async ( req, res ) => {
    try{

        const newUser = new authModel({
            firstname: req.body.firstname,
            password: req.body.password,
            confirmPass: req.body.confirmPass,
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email
        })

        const  userData = await newUser.save()
        res.status(200).json(userData)
 
    }catch(err) {
        res.status(403).json(err)

    }
})


router.post("/login", async (req, res) => {


    try {

        const findUser = await authModel.findOne({username: req.body.user})
        !findUser && res.status(404).json("User Not Found!!!")


        const accessToken = jwt.sign( {
            id: user._id
         },
            process.env.JWT_KEY,
            {expiresIn: process.env.EXPIRESIN}
            
        )

        const {password, ...others } = user._doc
        res.status(200).json({...others, accessToken})

        
    }catch(err) {
        res.status(403).json(err)

    }
})

// router.post("/demologin", async (req, res) => {


//     try {

//         const findUser = await authModel.findOne({username: req.body.user})
//         !findUser && res.status(404).json("User Not Found!!!")


//         const accessToken = jwt.sign( {
//             id: user._id
//          },
//             process.env.JWT_KEY,
//             {expiresIn: process.env.EXPIRESIN}
            
//         )

//         const {password, ...others } = user._doc
//         res.status(200).json({...others, accessToken})

        
//     }catch(err) {
//         res.status(403).json(err)

//     }
// })




module.exports = router
