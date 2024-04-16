const router = require('express').Router();

const carController  = require('../controllers/CartController')

router.get('/find/:id', carController.getCart),
router.post('/add', carController.addToCart),
router.post('/decrement', carController.decrementCartItem),
router.delete('/delete/:id', carController.deleteCartItem),


module.exports = router;