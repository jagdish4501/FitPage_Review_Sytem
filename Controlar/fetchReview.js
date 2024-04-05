import Review from '../Model/Review.js'
import body_data from "../Middleware/body_data.js";

async function fetchReview(req, res) {
    try {
        const data = await body_data(req);
        const reviews = await Review.find({ event: data.event_id });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, 'data': reviews }));

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': error }));
    }
}

export default fetchReview;


