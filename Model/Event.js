import { Schema, model } from 'mongoose';
const EventSchema = new Schema({
    event_id: {
        type: String,
        required: true,
        unique: true
    },
    org_id: {
        type: String,
        required: true,
        unique: true
    },
    name_of_event: {
        type: String,
        required: true
    },
    detail_of_event: {
        type: String,
    }
});

const Event = model('Event', EventSchema);

export default Event;
