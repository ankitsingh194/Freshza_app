const Order = require('../models/OrderModel');


module.exports ={
    getUserOrder:async (req,res)=>{
        const userId = req.params.id;
        console.log(userId)
        try {
            const UserOrder = await Order.find({userId}).populate({
                path:'productId',
                select:"-description -product_location"
            }).exec()
            console.log(UserOrder)

            res.status(200).json(UserOrder);
        } catch (error) {
            res.status(500).json(error);
            
        }
    }
}