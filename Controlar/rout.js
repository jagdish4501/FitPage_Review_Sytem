import { registerEvent, submitReview } from './write_to_DB.js'
import fetchReview from './fetchReview.js'

const rout = async (req, res) => {
    if (req.url.match(/\/api\/submitReview/) && req.method === 'POST') {
        submitReview(req, res);
    } else if (req.url.match(/\/api\/fetchReview/) && req.method === 'POST') {
        fetchReview(req, res);
    } else if (req.url.match(/\/api\/reportedReview/) && req.method === 'POST') {

    } else if (req.url.match(/\/api\/registerEvent/) && req.method === 'POST') {
        registerEvent(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'rout does not exist' }));
    }
}

export default rout;