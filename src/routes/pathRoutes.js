import { addNewPath, getPath, getPathWithID, updatePath } from '../controllers/pathController';

const routes = (app) => {
    app.route('/path')
    .get((req, res, next) => {
        console.log(`${req.method} request from: ${req.originalUrl}`)
        next();
    }, getPath)

    // POST endpoint
    .post(addNewPath);


    app.route('/path/:pathId')
    // get specific path
    .get(getPathWithID)

    // put request
    .put((req, res, next) => {
        // middleware
        console.log(`${req.method} request from: ${req.originalUrl}`)
        next();
    }, updatePath)

    // delete request
    .delete((req, res) =>
    res.send('DELETE request was successful!'));
}

export default routes
