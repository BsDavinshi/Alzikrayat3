const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const { validateAlbum } = require('../middleware/validation');

router.get('/', albumController.getAll);
router.get('/:id', albumController.getOne);
router.post('/', validateAlbum, albumController.create);
router.delete('/:id', albumController.remove);

module.exports = router;
