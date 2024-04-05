import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    registrationExperience: {
        type: Number,
        required: true
    },
    eventExperience: {
        type: Number,
        required: true
    },
    breakfastExperience: {
        type: Number,
        required: true
    },
    overallRating: {
        type: Number,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    reports: [{
        reporter: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reason: String
    }],
    flagged: {
        type: Boolean,
        default: false
    },
    response: {
        type: String
    }
});

const Review = model('Review', ReviewSchema);

export default Review;
