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
    type: {//type 1-> registration , 2->event experiance, 3-> breakfast exp,4->overall experiance
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

// Create a compound index on event_id and user_id to enforce uniqueness
ReviewSchema.index({ event_id: 1, user_id: 1 }, { unique: true });

const Review = model('Review', ReviewSchema);

export default Review;
