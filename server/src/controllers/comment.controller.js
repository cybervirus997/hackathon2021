const express = require('express');
const router = express.Router();

const Comment = require('../models/comment.model');
const Posts = require('../models/posts.model')

router.get("", async (req, res) => {
    try {
        const comment = await Comment.find().populate("userId").lean().exec();
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(400).send(error);
    }
})

router.post("", async (req, res) => {
    try {
        const comment = await Comment.create({
            postsId: req.body.postsId,
            commentTitle: req.body.commentTitle,
            commentPic: req.body.commentPic,
            userId: req.body.userId,
            userName: req.body.userName,
        })
        const post1 = await Posts.findById(req.body.postsId).lean().exec();
        let arr = post1.comment;
        arr.push(comment);
        const post2 = await Posts.findOneAndUpdate({ _id: req.body.postsId }, { comment: arr });

        return res.status(200).json(comment);
    } catch (error) {
        return res.status(400).json(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(400).send(error);
    }
})


module.exports = router;