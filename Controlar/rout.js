import { registerEvent } from './EventRegistration.js'
import { createReview, likeReview, reportReview, respondToReview } from './Review.js'
import fetchReview from './fetchReview.js'
import signup from '../Auth/signup.js';
import login from '../Auth/login.js'


const rout = async (req, res) => {
    if (req.url.match(/\/api\/createReview/) && req.method === 'POST') {
        createReview(req, res);
    } else if (req.url.match(/\/api\/fetchReview/) && req.method === 'POST') {
        fetchReview(req, res);
    } else if (req.url.match(/\/api\/reportReview/) && req.method === 'POST') {
        reportReview(req, res);
    } else if (req.url.match(/\/api\/likeReview/) && req.method === 'POST') {
        likeReview(req, res);
    } else if (req.url.match(/\/api\/respondToReview/) && req.method === 'POST') {
        respondToReview(req, res);
    }
    else if (req.url.match(/\/api\/registerEvent/) && req.method === 'POST') {
        registerEvent(req, res);
    } else if (req.url.match(/\/api\/signup/) && req.method === 'POST') {
        signup(req, res);
    }
    else if (req.url.match(/\/api\/login/) && req.method === 'POST') {
        login(req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'rout does not exist' }));
    }
}

export default rout;