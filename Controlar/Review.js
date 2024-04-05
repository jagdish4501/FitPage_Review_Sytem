import body_data from "../Middleware/body_data.js";
import Review from '../Model/Review.js';

async function createReview(req, res) {
    try {
        const data = await body_data(req);
        const { eventId, userId, registrationExperience, eventExperience, breakfastExperience, overallRating } = data;
        // Check if the user has already reviewed the event
        const existingReview = await Review.findOne({ event: eventId, user: userId });
        if (existingReview) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'You have already reviewed this event' }));
        }
        // Create new review
        const review = new Review({ event: eventId, user: userId, registrationExperience, eventExperience, breakfastExperience, overallRating });
        await review.save();

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, message: 'Review created successfully' }));
    } catch (error) {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, error: error.message }));
    }
}

async function likeReview(req, res) {
    try {
        const data = await body_data(req);
        const { userId, reviewId } = data;
        const review = await Review.findById(reviewId);
        if (!review) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'Review not found' }));
        }
        // Check if the user has already liked the review
        if (review.likes.includes(userId)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'You have already liked this review' }));
        }
        review.likes.push(userId);
        await review.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, message: 'Review liked successfully' }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, error: error.message }));
    }
}

async function reportReview(req, res) {
    try {
        const data = await body_data(req);
        const { userId, reason, reviewId } = data;
        const review = await Review.findById(reviewId);
        if (!review) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'Review not found' }));
        }
        // Check if the user has already reported the review
        const existingReport = review.reports.find(report => report.reporter.toString() === userId);
        if (existingReport) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'You have already reported this review' }));
        }
        review.reports.push({ reporter: userId, reason });
        // Check if the review needs to be flagged
        if (review.reports.length >= 5) {
            review.flagged = true;
        }
        await review.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, message: 'Review reported successfully' }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, error: error.message }));
    }
}

async function respondToReview(req, res) {
    try {
        const data = await body_data(req);
        const { response, reviewId } = data;
        const review = await Review.findById(reviewId);
        if (!review) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "success": false, message: 'Review not found' }));
        }
        review.response = response;
        await review.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, message: 'Response added to review successfully' }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, error: error.message }));
    }
}


export { createReview, likeReview, reportReview, respondToReview }