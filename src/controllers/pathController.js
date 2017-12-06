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

