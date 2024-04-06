const { z } = require("zod");


const  userValidationSchema = z.object({
  email: z.coerce.string({
    required_error: 'Email is required'
  }).email({
    message :"Invalid email address"
  }).trim(),

  password: z.coerce.string({
    required_error: 'Password is required'
  }).trim().min(4,{
    message: 'Password must be at least 4 characters'
  })

}).required(
    {
        email:true,
        password:true
    }
)

const  toDoItemValidationSchema = z.object({
  id: z.coerce.string({
    required_error: 'ID is required'
  }).trim(),

  content: z.coerce.string({
    required_error: 'Content is required'
  }).trim().min(1,{
    message: 'Content must be at least 1 characters'
  })

}).required(
    {
        id:true,
        content:true
    }
)

module.exports = {
  userValidationSchema, toDoItemValidationSchema
}