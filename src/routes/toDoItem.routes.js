const { Router } = require("express");
const {ToDoItem} = require('../schemas/toDoItem.schema');
const { validateSchema,buildErrorResponse,buildSuccessResponse } = require("../utils/util");
const { toDoItemValidationSchema} = require('../validationSchemas/index')

const router = Router()

router.route('/create').post(validateSchema(toDoItemValidationSchema), async(req,res)=>{
   try{
    const  content = req.body.content
    await ToDoItem.create({content: content
    }  
    )
    const allTodos = await ToDoItem.find()
console.log("allTodos", allTodos)
    res.status(201).json(buildSuccessResponse({
    message:"To Do Item created succuessfully",
    status:201,
    todos: allTodos,
    }))
   }catch(error){
    console.log(error)
      if(error.status){
        console.log('error')
        res.status(400).json(buildErrorResponse(error))
      }else{
        res.status(400).json(buildErrorResponse({
            status : 500,
            message:"Server error"
        }))
      }
   }
})

router.route('/delete/:id').delete(async(req,res)=>{
    try {
        const deletedTodo = await ToDoItem.findByIdAndDelete(
            req.params.id
        )
        const allToDoItems = await ToDoItem.find()
        res.status(200).json({
            message: 'To do item deleted',
            deletedToToItem: deletedTodo,
            toDoItems: allToDoItems,
        })
    } catch(error){
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

 router.route('/getToDos').get(async(req,res)=>{
    console.log('get request')
    try {
        const todos = await ToDoItem.find()
        console.log('todosroutes', todos)

        res.status(200).json({ todos })
    } catch(error){
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