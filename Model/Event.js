import { Schema, model } from 'mongoose';
const EventSchema = new Schema({
    org_id: {
        type: String,
        required: true,
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
