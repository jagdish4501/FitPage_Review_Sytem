import User from '../Model/User'


async function saveUser({ user_name, email, password, name }) {
    try {
        const newUser = new User({ user_name, email, password, name });
        const savedUser = await newUser.save();
        console.log('User saved successfully:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

export default saveUser;
// Example usage:
const userParams = {
    user_name: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
    name: 'John Doe'
};

