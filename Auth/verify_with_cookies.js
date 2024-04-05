import { parseCookies } from '../Middleware/cookies.js'
import jwt from 'jsonwebtoken';
import User from '../Model/User.js'

const verify = async (req) => {
    const cookies = parseCookies(req);
    if (cookies.token) {
        try {
            const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);
            const user = await User.findById(decoded._id);
            return user;
        } catch (error) {
            return null
        }
    } else {
        return null;
    }
}
export default verify