import { Schema, model } from 'mongoose';
const EventSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name_of_event: {
        type: String,
        required: true
    },
    detail_of_event: {
        type: String,
        required: true
    }
});

const Event = model('Event', EventSchema);

export default Event;
