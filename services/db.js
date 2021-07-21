const mongoose = require('mongoose');


const User=mongoose.model('User',{
    email:String,
      username: String,
     password: String,
      event:Array
})

module.exports={
    User
}