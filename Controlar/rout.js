import { createEvent } from './createEvent.js'
import { createReview, likeReview, reportReview, respondToReview } from './Review.js'
import fetchReview from './fetchReview.js'
import signup from '../Auth/signup.js';
import login from '../Auth/login.js'
import verify from '../Auth/verify_with_cookies.js';

const rout = async (req, res) => {

    if (req.url.match(/\/api\/signup/) && req.method === 'POST') {
        signup(req, res);
    } else if (req.url.match(/\/api\/login/) && req.method === 'POST') {
        login(req, res);
    } else if (req.url.match(/\/api\/fetchReview/) && req.method === 'GET') {
        fetchReview(req, res);
    } else {
        const user = await verify(req);
        if (user) {//protecting rout from unauthorized access
            if (req.url.match(/\/api\/createReview/) && req.method === 'POST') {
                createReview(req, res);
            } else if (req.url.match(/\/api\/reportReview/) && req.method === 'POST') {
                reportReview(req, res);
            } else if (req.url.match(/\/api\/likeReview/) && req.method === 'POST') {
                likeReview(req, res);
            } else if (req.url.match(/\/api\/respondToReview/) && req.method === 'POST') {
                respondToReview(req, res);
            } else if (req.url.match(/\/api\/createEvent/) && req.method === 'POST') {
                createEvent(req, res);
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'rout does not exist' }));
            }
        } else {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'unauthorized access try to login first' }));
        }
    }
}

export default rout;