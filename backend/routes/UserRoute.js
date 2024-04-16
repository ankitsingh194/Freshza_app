const router = require('express').Router();

const userController = require('../controllers/UserControllers');

router.delete('/delete/:id', userController.deleteUser);
router.get('/getUser/:id', userController.getUser);

module.exports = router;