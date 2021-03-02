const apiAdapter = require('../../apiAdapter');

const {USER_API} = process.env;
const api = apiAdapter(USER_API);

module.exports = async(req,res) => {
    try {
        const music = await api.get('/request-music')
    return res.json(music.data)
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({status:'error', message:'service is unavailable'});
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
    
}