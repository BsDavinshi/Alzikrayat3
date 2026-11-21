const express = require('express');
const router = express.Router({ mergeParams: true });
const commentController = require('../controllers/commentController');
const { validateComment } = require('../middleware/validation');

router.get('/', commentController.getByPhoto);
router.post('/', validateComment, commentController.create);

module.exports = router;
