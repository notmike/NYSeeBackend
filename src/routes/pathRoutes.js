import { addNewPath, getPath, getPathWithID } from '../controllers/pathController';

const routes = (app) => {
    app.route('/path')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getPath)

    // POST endpoint
    .post(addNewPath);

    app.route('/path/:pathId')
    // get specific path
    .get(getPathWithID)
    // put request
    .put((req, res) =>
    res.send('PUT request successful!'))

    // delete request
    .delete((req, res) =>
    res.send('DELETE request was successful!'));
}

export default routes
