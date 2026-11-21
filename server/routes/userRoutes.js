const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateProfileUpdate } = require('../middleware/validation');

router.get('/search', userController.search);
router.put('/me', validateProfileUpdate, userController.updateProfile);
router.get('/:id', userController.getProfile);

module.exports = router;
