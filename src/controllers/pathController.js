import mongoose from 'mongoose';
import { PathSchema } from '../models/pathModel';

const Path = mongoose.model('Path', PathSchema);

export const addNewPath = (req, res) => {
    let newPath = new Path(req.body);

    newPath.save((err, path) => {
        if (err) {
            res.send(err);
        }
        res.json(path);
    });
};

export const getPath = (req, res) => {
    Path.find({}, (err, path) => {
        if (err) {
            res.send(err);
        }
        res.json(path);
    });
};

export const getPathWithID = (req, res) => {
    Path.findById(req.params.pathId, (err, path) => {
        if (err) {
            res.send(err);
        }
        res.json(path.pathArray[0]);
    })
};

// export const updatePath = (req, res) => {
//     let newPath = new Path(req.body);
//     let thisPath = ; // <-- path where id=newPath_id

// };

// export const updatePath = (req, res) => {
//     Path.findOneAndUpdate({ _id: req.params.pathId}, req.body, { new: true }, (err, path) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(path);
//     })
// };

export const updatePath = (req, res) => {
    Path.findByIdAndUpdate(
        req.params.pathId,
        {$push: {"pathArray": {path: req.body.path}}},
        {safe: true, upsert: true, new : true},
        function(err, model) {
            res.send(err);
        }
    );
};
