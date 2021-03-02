const {Music} = require('../../../models');

module.exports = async(req,res) => {
    try {
        const id = req.params.id;
        const music = await Music.findByPk(id)
        if(!music){
            return res.status(404).json({
                status: 'error',
                message: 'data not found'
            });
        }
        await music.destroy()
        return res.status(200).json({
            status: 'success',
            message: 'data deleted'
        });
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: 'service error'
        })
    }
}