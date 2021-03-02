const express = require('express');
const router = express.Router();
const musicHandler = require('./handler/musics')
const {upload} = require('../midllerware/multer')
// const path = require('path');
// const multer = require('multer');
// const fs = require("fs");



// const storage = multer.diskStorage({
//   destination: "public/images",
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'audio/mp3' || file.mimetype == 'audio/wav') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload = multer({ storage: storage }).fields([{ name: 'thumbnail'}, { name: 'music'}]);


/* GET home page. */
router.post('/music-goes-on',upload, musicHandler.create);
router.get('/music-goes-on', musicHandler.get);
router.get('/music-goes-on/:id', musicHandler.detail);
router.put('/music-goes-on/:id', musicHandler.update);
router.delete('/music-goes-on/:id', musicHandler.deleted);

module.exports = router;
