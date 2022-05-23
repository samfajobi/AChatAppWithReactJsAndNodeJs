const mongoose = require("mongoose");


const authSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
            
        },
        lastname: {
            type: String,
            required: [  true,"Please provide a username"]
            
        },
        confirmpass: {
            type: String 
         
        },

        username: {
            type: String,
            required: true,
           

        },

        password: {
            type: String,
            
        },

        email: {
            type: String
            
        }

    }
)


const authModel = mongoose.model("authModel", authSchema)

module.exports =  authModel;