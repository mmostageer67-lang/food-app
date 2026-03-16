const foodModel=require('../models/categoryModel')
const creatFood=async(req,res)=>
{
    try {
        const {title,
Descriotin,
price,
imageUrl,
foodTgs,
code,
category,
isAvilable,
resturant,
rating,
totalRting,
}=req.body
if(
!title ||
!Descriotin ||
!price 

){
return res.status(400).send({
success:false,
message:"Please provide all required fields"
})
}
const newFood=new foodModel({
    title,
Descriotin,
price,
imageUrl,
foodTgs,
code,
category,
isAvilable,
resturant,
rating,
totalRting,
})
await newFood.save()
res.status(201).json({
    cuccess:true,
    message:'the foode is created',
    newFood
})
    } catch (error) {
       res.status(500).json({
        success:false,
        message:'error in food api!'
       }) 
    }
}
const updateFood=async(req,res)=>
{
    try {
        const {id}=req.params
        const{title,imageUrl}=req.body
        if(!title||imageUrl)
        {
            res.status(500).json({
                succes:false,
                message:'PLEASE PROVIDE TITLE OR IMAGEURL'
            })
        }
       const updateFood = await foodModel .findByIdAndUpdate(id,{title,imageUrl},{new:true})
         if(!updateFood)
         {
           res.status(500).json({
                succes:false,
                message:'update food not found!'
            }) 
         }
         res.status(200).json({
            cuccess:true,
            message:'updated successfully.',
            updateFood
         })
    } catch (error) {
        res.status(500).json({
            cuccess:false,
            message:'error in update food!',
            error
        })
    }
}
const deleteFood=async(req,res)=>
{
  try {
    const foodId=req.params.id
    if(!foodId)
    {return res.status.json({
      success:false,
      message:'THE ID NOT FOUND || RESTURANT !'
    })}
    await foodModel.findByIdAndDelete(foodId)

    

    res.status(200).json({
      success:true,
      message:'food DELETED SUCCESSFULLY'
    })
    

  } catch (error) {
    res.status(500).json({
      success:false,
      message:'ERROR IN DELETE API!',
      error
    })
  }
}
const placeOrderControllers=async(req,res)=>
{
try {
    const foodId=req.params.id
    if(!foodId)
    {return res.status.json({
      success:false,
      message:'THE ID NOT FOUND || RESTURANT !'
    })}
    await foodModel.findByIdAndDelete(foodId)

    

    res.status(200).json({
      success:true,
      message:'food DELETED SUCCESSFULLY'
    })
    

  } catch (error) {
    res.status(500).json({
      success:false,
      message:'ERROR IN DELETE API!',
      error
    })
  }
}
// PLACE ORDER
const placeOrderController = async (req, res) => {
  try {
    const { cart, payment } = req.body;

    if (!cart || !payment) {
      return res.status(500).send({
        success: false,
        message: "please food cart or payment method",
      });
    }

    const total = 0;

    // cal
    cart.map((i) => {
      total += i.price;
    });

    const newOrder = new orderModel({
      foods: cart,
      payment,
      buyer: req.body.id,
    });

    res.status(201).send({
      success: true,
      message: "Order Placed successfully",
      newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in place order API",
      error,
    });
  }
};

module.exports={creatFood,updateFood,deleteFood,placeOrderController}