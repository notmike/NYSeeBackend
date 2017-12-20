import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PathSchema = new Schema({
    _id: { type: String, required: 'Must have a PathId' },
    pathArray: [{
        path: [],
        rating: {
            type: Number,
            default: 0
        },
        submitted_date: {
            type: Date,
            default: Date.now
        },
    }],
});
