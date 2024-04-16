const router = require('express').Router();

const OrderController = require('../controllers/OrderController')

router.get('/:id', OrderController.getUserOrder)


module.exports = router