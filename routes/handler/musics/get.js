const {Music} = require('../../../models')

module.exports = async(req,res) => {
    try {
        const music = await Music.findAll()
        return res.status(200).json({
            status: 'success',
            data: music
        })
    } catch (error) {
        console.log(error)
    }
    

}