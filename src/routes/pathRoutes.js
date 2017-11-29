import { addNewPath } from '../controllers/pathController';

const routes = (app) => {
    app.route('/path')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },  (req, res, next) => {
        res.send('GET request was successful!');
    })

    .post(addNewPath);

    app.route('/path/:pathId')
    .put((req, res) =>
    res.send('PUT request successful!'))

    .delete((req, res) =>
    res.send('DELETE request was successful!'));
}

export default routes
