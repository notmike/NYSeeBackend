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
        console.log("test 1" , req.body.path);
        console.log(`${req.method} request from: ${req.originalUrl}`)
        // Adjust Steps from running total, to num of steps per segment
        for (var i = 0, len = req.body.path.length, count = 0; i < len; i++ ) {
            req.body.path[i].steps -= count;
            count += req.body.path[i].steps;
        }
        console.log("test2:", req.body.path);
        next();
    }, updatePath)

    // delete request (WON'T USE)
    .delete((req, res) =>
    res.send('DELETE request is forbidden!'));
}

export default routes
