import { Schema, model } from 'mongoose';

const ReportSchema = new Schema({
    review_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
});

// Create a compound index on event_id and user_id to enforce uniqueness
ReportSchema.index({ review_id: 1, user_id: 1 }, { unique: true });

const RReview = model('reported_review', ReportSchema);

export default RReview;
