const express = require('express');
const router = express.Router();
const subsHandler = require('./handler/subscribe');


/* GET users listing. */
router.post('/subscribe', subsHandler.create);
router.get('/subscribe', subsHandler.get);
router.delete('/subscribe/:id', subsHandler.destroy);

module.exports = router;
