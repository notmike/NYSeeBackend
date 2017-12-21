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
    Path.findById(
        req.params.pathId,
        (err, path) => {
            if (err || path == null) {
                console.log("ERROR:\t" + err);
                res.status(422).send(err);
            } else {
                // right now just returns the 1st path
                // path.pathArray.sort('totalSteps').exec(function(err, docs) {
                //     var min = doc.path;
                // });
                // res.json(min);
                res.json(path.pathArray[0].path);
            }
    })
};

export const updatePath = (req, res) => {
    Path.findByIdAndUpdate(
        req.params.pathId,
        {$push: {"pathArray": {path: req.body.path , totalSteps: req.body.totalSteps} }},
        {safe: true, upsert: true, new : true},
        (err, path) => {
            if (err) {
                res.send(err);
            }
            // returns array of paths for specified PathId
            res.json(path.pathArray);
    })
};
