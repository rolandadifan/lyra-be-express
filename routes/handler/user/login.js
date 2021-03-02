const apiAdapter = require('../../apiAdapter');
const jwt = require('jsonwebtoken');

const {USER_API, JWT_SECRET} = process.env;

const api = apiAdapter(USER_API);

module.exports = async(req,res) => {
    try {
        const user = await api.post('/login-admin', req.body);
        const data = user.data.data;

        const token = jwt.sign({data}, JWT_SECRET);
        return res.json({
            status: 'success',
            data: {
                token: token
            }
        })
    } catch (error) {
        if(error.code === 'ECONNREFUSED') {
            return res.status(500).json({status:'error', message:'service is unavailable'});
        }
            const { status, data } = error.response;
        return res.status(status).json(data);
    }
}