const express = require('express');
const dotenv = require('dotenv')
const app = express()

app.get('/', (req, res) => {
    console.log(`GET data`)
});

app.post('/', (req, res) => {
    res.send()
});


const port = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${port}...`);
})

module.exports = app;