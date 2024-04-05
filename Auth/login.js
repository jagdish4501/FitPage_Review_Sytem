import User from '../Model/User.js'
import body_data from '../Middleware/body_data.js';
import { setCookie } from '../Middleware/cookies.js'
import token from '../Auth/jwt_token.js'

const login = async (req, res) => {
    try {
        const data = await body_data(req);
        const user = await User.findOne({ user_name: data.user_name, password: data.password });
        if (user) {
            const btoken = token(user._id);
            setCookie(res, btoken);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": true, 'user': user }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, "message": 'user name or password not match' }));
        }
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': err }));
    }
}

export default login;