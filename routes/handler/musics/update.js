
const {Music} = require('../../../models');
const fs = require('fs-extra');

module.exports = async(req,res) => {
    try {
    const id = req.params.id;
    const musicsss = await Music.findByPk(id);
    if(!musicsss){
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    if(req.file == undefined){
        const {
            judul,
            singer,
            name,
            genre,
            duration,
            music,
        } = req.body;
    
    
        await musicsss.update({
            judul,
            singer,
            name,
            genre,
            duration,
            music,
        });
    
        return res.json({
            status: 'success',
            data: {
            id: musicsss.id,
            judul,
            singer,
            name,
            genre,
            duration,
            music,
            }
        });
    }
    
        
    } catch (error) {
        console.log(error)
    }
}
