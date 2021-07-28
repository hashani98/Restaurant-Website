const express= require('express')
const router = express.Router()
const controllers=require('../controllers')

// router.get('/', async(req,res,next)=>{
//     const data= req.context
//     const itemCtr= controllers.item.instance()
//     data.appetizers= await itemCtr.get({category:'APPETIZERS'})
//     data.sandwich= await itemCtr.get({category:'SANDWICH'})
//     data.all_day_breakfast= await itemCtr.get({category:'ALL DAY BREAKFAST'})
//     data.soups= await itemCtr.get({category:'SOUPS'})
//     data.salads= await itemCtr.get({category:'SALADS'})
//     data.burgers= await itemCtr.get({category:'BURGERS'})
//     data.main_courses= await itemCtr.get({category:'MAIN COURSES'})
//     data.italian_range= await itemCtr.get({category:'ITALIAN RANGE'})
//     data.hot_beverage= await itemCtr.get({category:'HOT BEVERAGE'})
//     data.cold_beverage= await itemCtr.get({category:'COLD BEVERAGE'})
//     data.milk_shakes= await itemCtr.get({category:'MILK SHAKES'})
//     data.fresh_juice= await itemCtr.get({category:'FRESH JUICE'})


   
//     res.render('home',data)

//})
router.get('/menu', async(req,res,next)=>{
    const data= req.context
    const itemCtr= controllers.item.instance()
    data.appetizers= await itemCtr.get({category:'APPETIZERS'})
    data.sandwich= await itemCtr.get({category:'SANDWICH'})
    data.all_day_breakfast= await itemCtr.get({category:'ALL DAY BREAKFAST'})
    data.soups= await itemCtr.get({category:'SOUPS'})
    data.salads= await itemCtr.get({category:'SALADS'})
    data.burgers= await itemCtr.get({category:'BURGERS'})
    data.main_courses= await itemCtr.get({category:'MAIN COURSES'})
    data.italian_range= await itemCtr.get({category:'ITALIAN RANGE'})
    data.hot_beverage= await itemCtr.get({category:'HOT BEVERAGE'})
    data.cold_beverage= await itemCtr.get({category:'COLD BEVERAGE'})
    data.milk_shakes= await itemCtr.get({category:'MILK SHAKES'})
    data.fresh_juice= await itemCtr.get({category:'FRESH JUICE'})
   
    res.render('menu',data)

})
router.get('/blog', (req,res,next)=>{
    //const data= req.context
    res.render('blog', req.context)

})

router.get('/items', async(req,res,next)=>{
    const filters=req.query
   const itemCtr= controllers.item.instance()
   const items= await itemCtr.get(filters)
   res.json({items})
})   
router.post('/order', async (req, res, next) => {
   
    const orderData = req.body
    
  
   const orderCtr = controllers.order.instance()
   const order = await orderCtr.post(orderData)
  
   res.json(order)
    
  })

module.exports=router