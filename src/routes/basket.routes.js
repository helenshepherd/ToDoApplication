const { Router } = require("express");
const {Basket} = require('../schemas/basket.schema');
const { validateSchema,buildErrorResponse,buildSuccessResponse } = require("../utils/util");
const { toDoItemValidationSchema} = require('../validationSchemas/index')

const router = Router()


// GET localhost:3000/basket/:id
// PUT localhost:3000/basket/:id/item/:itemId
// DELETE localhost:3000/basket/:id/item/:itemId

router.route('/basket/:id').get(async(req,res)=>{
    try {
        const basket = await Basket.findById(
            req.params.id
        )
        res.status(200).json({ basket })
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


router.route('/basket/:id/item/:itemId').put(async(req,res)=>{
    try {
        const basket = await Basket.findById(
            req.params.id
        );
        if (!basket) {
          return res.status(404).json({ message: "Basket not found" });
      }
        const updatedBasketItems = basket.items.map(item => {
            if (item.id === req.params.itemId){
                return {...item, quantity: req.body.quantity};
            }
            return item;
        });
        basket.items = updatedBasketItems;
        await basket.save();
        res.status(200).json({ basket });
    } catch(error){
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

 router.route('/basket/:id/item/:itemId').delete(async(req,res)=>{
    try {
        const basket = await Basket.findById(
            req.params.id
        )
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