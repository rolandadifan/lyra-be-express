const {Music} = require('../../../models');
const validator = require('fastest-validator');
const v = new validator();


module.exports = async(req,res) => {
    try {
        const schema = {
            judul: 'string|empty:false',
            singer: 'string|empty:false',
            genre: 'string|empty:false',
            duration: 'string|empty:false',
            year: 'string|empty:false',
        }
        const validate = v.validate(req.body, schema)
        if (validate.length){
            return res.status(404).json({
                status: 'error',
                message: validate
            })
        }
        const data = {
            judul: req.body.judul,
            singer: req.body.singer,
            genre: req.body.genre,
            duration: req.body.duration,
            year: req.body.year,
            thumbnail:   `images/${req.file.filename}`,
            music: req.body.music
        }
        await Music.create(data)
        return res.status(200).json({
            status: 'success',
            data: data
        })

    } catch (error) {
        console.log(error)
    }
}

