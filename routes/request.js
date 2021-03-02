const express = require('express');
const router = express.Router();
const reqmusicHandler = require('./handler/request');


/* GET users listing. */
router.post('/request-music', reqmusicHandler.create);
router.get('/request-music', reqmusicHandler.get);
router.delete('/request-music/:id', reqmusicHandler.destroy);


module.exports = router;
