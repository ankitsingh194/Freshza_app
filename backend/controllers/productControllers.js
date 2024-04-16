const Product = require("../models/Products");

module.exports ={
    createProduct: async(req ,res)=>{
        const newProduct = Product.create(req.body)
        try{
            await newProduct.save();
            res.status(200).json("Product created successfully")

        }catch(err){
            res.status(500).json("failed to create the product")

        }
    },

    getAllProduct:async(req,res)=>{
        const allProducts = await Product.find().sort({createdAt:-1})
        try {
            res.status(200).json(allProducts)
        } catch (error) {
            res.status(500).json('Error failed to get the product')
            
        }
    },
    getProduct: async(req,res)=> {
      try{  
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
      } catch(error){
        res.status(500).json("failed to get the product")
      }
    },
    searchProduct:async(req,res) => {
        try{
            const query = req.params.key
            const result = await Product.aggregate(
        [
            {
                
                $match:{ 
                    $or:[
                        {title:{$regex:query, $options:'i'}},
                        {supplier:{$regex:query, $options:'i'}},
                        {Price:{$regex:query, $options:'i'}},
                        {description:{$regex:query, $options:'i'}},
                        {product_location:{$regex:query, $options:'i'}}

                    ]
                }
                
                    

            }
         
                
            
        ]
            )
            res.status(200).json(result)
    } catch(error){
        res.status(500).json("failed to get the product")

    }
    }
}