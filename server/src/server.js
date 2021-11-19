const express = require('express');
const connect = require('./config/db')
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const start = async () => {
    await connect();
    app.listen(3007, () => {
        console.log("listening on port 3007")
    })
}

module.exports = start;