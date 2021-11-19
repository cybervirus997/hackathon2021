const express = require('express');
const connect = require('./config/db')
const cors = require('cors');
const app = express();
const truckController = require('./controllers/truck.controller');
const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');
const commentController = require('./controllers/comment.controller');

app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/truck", truckController);
app.use("/post", postController);
app.use("/comment", commentController);

const start = async () => {
    await connect();
    app.listen(3009, () => {
        console.log("listening on port 3009")
    })
}

module.exports = start;