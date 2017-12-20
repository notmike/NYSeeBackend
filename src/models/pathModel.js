import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// var SegmentSchema = new Schema({ 
//     direction : String,
//     steps : Number
// });

// var TestSchema = new Schema({
//     num1 : Number,
//     num2 : Number, });

export const PathSchema = new Schema({
    _id: { type: String, required: 'Must have a PathId' },
    pathArray: [{
        path: Object,
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
