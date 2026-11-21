const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');
const upload = require('../middleware/upload');
const { validatePhoto } = require('../middleware/validation');

router.get('/', photoController.getAll);
router.get('/:id', photoController.getOne);
router.post('/', upload.single('image'), validatePhoto, photoController.create);
router.delete('/:id', photoController.remove);
router.post('/:id/like', photoController.toggleLike);
router.delete('/:id/tags/:targetUserId', photoController.untagUser);

module.exports = router;
