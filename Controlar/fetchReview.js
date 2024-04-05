import Review from '../Model/Review.js';
import url from 'url';

async function fetchReview(req, res) {
    try {
        // Extract query parameters from the request URL
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;
        const event_id = query.event_id;
        const page = parseInt(query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(query.limit) || 10; // Default to limit 10 if not provided
        const sorted = query.sorted || 'random'; // Default to 'random' if not provided
        const skip = (page - 1) * limit;
        let sortOption = {};
        if (sorted === 'asc' || sorted === 'desc') {
            sortOption = { overallRating: sorted === 'asc' ? 1 : -1 }; // Sort by rating field
        } else if (sorted === 'random') {
            sortOption = { randomField: 1 }; // Sort by randomField for random order
        }
        console.log(sortOption)
        const reviews = await Review.find({ event: event_id })
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": true, 'data': reviews }));

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ "success": false, "message": 'server side error', 'error': error }));
    }
}

export default fetchReview;
