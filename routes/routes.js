const express = require('express');
const userController = require('../controllers/mpcontroller');
const router = express.Router();

router.get('/api/v1/bd-phonebook/multiimage-downloader', userController.multiImageDownloader);
module.exports = router;
