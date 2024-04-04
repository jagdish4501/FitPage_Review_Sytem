import body_data from "../Middleware/body_data.js";
import Review from '../Model/Review.js'
import Event from '../Model/Event.js'


const submitReview = async (req, res) => {
    try {
        const data = await body_data(req);
        const newReview = new Review(data);
        const savedReview = await newReview.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, 'savedReview': savedReview }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': error }));
    }
}

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
export { submitReview, registerEvent }


