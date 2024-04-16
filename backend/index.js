const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const productrouter = require('./routes/ProductRoute')
const Authroute = require('./routes/authRoute')
const UserRoute = require('./routes/UserRoute')
const CartRoute = require('./routes/CartRoute')
const OrderRoute = require('./routes/OrderRoute')
const app = express()
const port =  4000;



var corsOptions = {
  whitelist: ['http://192.168.1.40','http://192.168.1.40:3000/v1/api/cart/add','http://192.168.1.40:3000/v1/api/auth/register','http://192.168.1.40:3000/v1/api/auth/login','http://192.168.1.40:3000','http://192.168.1.40:3000/v1/api/cart/delete/:id'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


  app.use(cors(corsOptions));  


dotenv.config()
mongoose.connect(process.env.MONGO_URL).
then(()=> console.log("db connected")).
catch((err)=> console.log(err) )


app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}));

app.use('/v1/api/products', productrouter);
app.use('/v1/api/auth',Authroute);
app.use('/v1/api/User',UserRoute);
app.use('/v1/api/cart',CartRoute);
app.use('/v1/api/order',OrderRoute);

app.listen( process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))