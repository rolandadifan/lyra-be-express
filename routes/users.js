const express = require('express');
const router = express.Router();
const userHandler = require('./handler/user')

/* GET users listing. */
router.post('/registrasi-admin', userHandler.register);
router.post('/login-admin', userHandler.login)

module.exports = router;
