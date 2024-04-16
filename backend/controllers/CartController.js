const Product = require('../models/Products')
const Cart = require('../models/CartModel');


module.exports ={
    addToCart:async (req,res) => {
        const {userId,cartItem,quantity} = req.body;
         console.log(userId,cartItem,quantity)
        try {
            const cart = await Cart.findOne({userId})
            if(cart){
                const existingProduct = cart.products.find(
                    (product) => product.cartItem.toString() === cartItem
                )

                if(existingProduct){
                    existingProduct.quantity += 1
                }else{
                    cart.products.push({cartItem,quantity})
                }

                await cart.save();
                res.status(200).json("Product added to Cart")

            }else{
                const newCart = new Cart({
                    userId,
                    products:[{cartItem, quantity:quantity}]
                });

                await newCart.save();
                res.status(200).json("Product added to Cart")

            }
        } catch (error) {
            res.status(500).json("Product is not addded to cart ")
            
        }



    },
    getCart:async (req,res) => {
        const userId = req.params.id;
      
        try {
            const cart = await Cart.find({userId}).populate('products.cartItem',"_id title supplier Price imageUrl");
            let data = cart[0].products[0]
            res.status(200).json(data)
        } catch (error) {
            res.status(200).json("Product does not exist")
            
        }
        


    },
    deleteCartItem:async (req,res) => {
        const userId  = req.params.id;

        try {
            await Cart.findOneAndDelete({userId})

            res.status(200).json('Cart is deleted')

            
        } catch (error) {
            res.status(500).json(' Error while  deleteing Cart ')
            
        }
        


    },
    decrementCartItem:async (req,res) => {
        const {userId,cartItem } = req.body;
        console.log(userId,cartItem)
       

        try {
            const cart = await Cart.findOne({userId})
           

            if(!cart){
                return res.status(404).json("Cart not found")
            }
            
            const existingProduct = cart.products.find(
                (product) => product.cartItem.toString() === cartItem
            )

            if(!existingProduct){
                return res.status(404).json("Cart not found")

            }
            if(existingProduct.quantity  === 1){
                cart.products = cart.products.filter(
                    (product) => product.cartItem.toString() !==  cartItem
                )
            }else{
                existingProduct.quantity -= 1;

            }
            await cart.save();

            if(existingProduct.quantity === 0){
                await Cart.updateOne(
                    {userId},
                    {$pull:{products:{cartItem}}}
                )
            }

            res.status(200).json("Product updated")
        } catch (error) {
            res.status(500).json("Erorr while  Updating Product")
            
        }

        


    }
}