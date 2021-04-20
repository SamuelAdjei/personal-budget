const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get an instance of the express Router
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
    console.log(`API is up`)
    next();
});

router.route('/category').post((req, res) => {

})

router.get('/', (req, res) => {
    res.status(200).json({ message: 'hooray! welcome to our api!' })
});

router.post('/', (req, res) => {
    res.status(201).json()
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with '/api'
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

module.exports = app;