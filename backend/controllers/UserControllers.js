const User = require('../models/UserModel');


module.exports = {
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json('Successfully Deleted')
            
        } catch (error) {
            res.status(200).json('Error while deleteing user')
            
        }
       

    },

    getUser: async (req,res) => {
        try {
            const user = await User.findById(req.params.id)

            if(!user){
                res.status(500).json('User dose not exist')
            }

            const {password,__v,createdAt, updatedAt,...userData} = user._doc;

            res.status(200).json(userData)

        } catch (error) {
            res.status(500).json(error)
            
        }
    }
}