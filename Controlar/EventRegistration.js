import body_data from "../Middleware/body_data.js";
import Event from '../Model/Event.js'

const registerEvent = async (req, res) => {
    try {
        const data = await body_data(req);
        const newEvent = new Event(data);
        const savedEvent = await newEvent.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, 'savedEvent': savedEvent }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': error }));
    }
}

export { registerEvent }


