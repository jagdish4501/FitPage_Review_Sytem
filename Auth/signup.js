import User from '../Model/User.js'
import body_data from '../Middleware/body_data.js';
import token from '../Auth/jwt_token.js'
import { setCookie } from '../Middleware/cookies.js'

const signup = async (req, res) => {
    try {
        const data = await body_data(req);
        const user_name = await User.findOne({ user_name: data.user_name });
        const email = await User.findOne({ email: data.email });
        if (!user_name && !email) {
            const newUser = new User(data);
            const savedUser = await newUser.save();
            const btoken = token(savedUser._id);
            setCookie(res, btoken);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": true, 'savedReview': savedUser }));
        } else {
            let message = {};
            if (email)
                message.email = "email already exist";
            if (user_name)
                message.username = 'user name already exist';
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, "message": message }));
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': error }));
    }
}

export default signup;