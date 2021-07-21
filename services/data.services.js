const db = require('./db')

  const login=(req,email,password)=> {
  return db.User.findOne({email,password})
  .then(user=>{
    if(user){
      console.log(user)
      
      return{
        statusCode:200,
           status:true,
           message:"successfully login",
           name:user.username  
       }
    }
    else{
      return{
        statusCode:422,
          status:false,
          message:"Invalid credentials"
      }
    }
  })
  }

  module.exports={
    login}