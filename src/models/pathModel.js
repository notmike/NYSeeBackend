import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PathSchema = new Schema({
    stationName: {
        type: String,
        required: 'Must have a station name'
    },
    path: {
        type: String,
        required: 'Must have a path'
    },
    rating: {
        type: Number,
        default: 0
    },
    submitted_date: {
        type: Date,
        default: Date.now
    }
});
