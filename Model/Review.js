import { Schema, model } from 'mongoose';
const ReviewSchema = new Schema({
    event_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});

const Review = model('Review', ReviewSchema);

export default Review;
