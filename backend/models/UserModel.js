const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String,  required:true, unique:true},
    mobile:{type:Number },
    password:{type:String,  required:true},
    location:{type:String,   default:'India'},
    
},{timestamps:true});


const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;