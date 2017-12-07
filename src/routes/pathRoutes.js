import { addNewPath, getPath, getPathWithID, updatePath } from '../controllers/pathController';

const routes = (app) => {
    app.route('/path')
    .get((req, res, next) => {
        console.log(`${req.method} request from: ${req.originalUrl}`)
        next();
    }, getPath)

    // POST endpoint
    .post(addNewPath);

    // ********** USER REQUESTS NAVIGATION **********
    // get specific path
    app.route('/path/:pathId')
    .get((req, res, next) => {
        // MIDDLEWARE GOES HERE
        console.log(`${req.method} request from: ${req.originalUrl}`)
        next();
    }, getPathWithID)

    // ********** USER SUBMITS PATH **********
    // put request
    .put((req, res, next) => {
        // MIDDLEWARE GOES HERE
        console.log(`${req.method} request from: ${req.originalUrl}`)
        next();
    }, updatePath)

    // delete request (WON'T USE)
    .delete((req, res) =>
    res.send('DELETE request is forbidden!'));
}

export default routes
