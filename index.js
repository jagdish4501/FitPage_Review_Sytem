import connectDB from './db/connect.js'
// import saveUser from './Controlar/task.js'
import http from 'http';
import 'dotenv/config'

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Connection with cross Origin are enbled' }));
    } else {
        const userParams = {
            user_name: 'john_doe',
            email: 'john@example.com',
            password: 'password123',
            name: 'John Doe'
        };
        // saveUser(userParams).then(() => {
        //     console.log("user saved");
        // }).catch(() => {
        //     cons
        // })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'api is in working' }));
    }


})

const start = async () => {
    try {
        console.log(process.env.MONGO_URI)
        await connectDB(process.env.MONGO_URI);
        server.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();