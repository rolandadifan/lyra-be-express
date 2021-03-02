const apiAdapter = require('../../apiAdapter');

const {USER_API} = process.env;

const api = apiAdapter(USER_API);

module.exports = async(req,res) => {
    try {
        const id = req.params.id;
    const subs = await api.delete(`/subscriber/${id}`)
    return res.json(subs.data)
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({status:'error', message:'service is unavailable'});
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
    
}