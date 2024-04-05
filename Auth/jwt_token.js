import jwt from 'jsonwebtoken';
const token = (_id) => {
    try {
        const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '1h' });//creating jwt token for two hrs
        return token;
    } catch (error) {
        return null;
    }
}
export default token;