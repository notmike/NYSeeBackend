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
        console.log("test 1" , req.body);
        console.log(`${req.method} request from: ${req.originalUrl}`)
        // Adjust Steps from running total, to num of steps per segment
        var count = 0;
        for (var i = 0, len = req.body.path.length; i < len; i++ ) {
            req.body.path[i].steps -= count;
            count += req.body.path[i].steps;
        }
        req.body.totalSteps = count;

        console.log("test2:", req.body);
        next();
    }, updatePath)

    // delete request (WON'T USE)
    .delete((req, res) =>
    res.send('DELETE request is forbidden!'));
}

export default routes
