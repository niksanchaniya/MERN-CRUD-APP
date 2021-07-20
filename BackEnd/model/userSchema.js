 const mongoose = require("mongoose");

 const userSchema = mongoose.Schema({
     name: {
         type: String
     },
     username: {
         type: String
     },
     email: {
         type: String
     },
     phone: {
         type: Number
     }

 });

 user = mongoose.model("user", userSchema);

 module.exports = user;