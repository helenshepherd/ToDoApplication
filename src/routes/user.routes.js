const { Router } = require("express");
const {User} = require('../schemas/user.schema');
const { validateSchema,buildErrorResponse,buildSuccessResponse } = require("../utils/util");
const { userValidationSchema} = require('../validationSchemas/index')

const router = Router()

router.route('/create').post(validateSchema( userValidationSchema), async(req,res)=>{

   try{
    const  {email, password} = req.body

   const  existingUser = await User.findOne({
    email: email
   })
console.log(existingUser)

   if(existingUser  !== null){
    throw {
        message :"User already exist",
        status : 400
     }
   }

   await User.create({
    email,
    password
   })



   res.status(200).json(buildSuccessResponse({
   message:"User created succuessfully",
   status:200,
   data:{
    email,

   }
   }))

   }catch(error){
    console.log(error)
      if(error.status){
        res.status(400).json(buildErrorResponse(error))
      }else{
        res.status(400).json(buildErrorResponse({
            status : 500,
            message:"Server error"
        }))
      }
   }
})

module.exports = router