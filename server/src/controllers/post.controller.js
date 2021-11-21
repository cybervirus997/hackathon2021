const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const Posts = require("../models/posts.model");

router.get("", async (req, res) => {
    try {
        const posts = await Posts.find({}).populate("userId").populate("comment").populate("truckId").lean().exec();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.post("",async (req, res) => {
    try {
        console.log("18");
        const posts = await Posts.create({
                userId: req.body.userId,
                title: req.body.title,
                startPoint: req.body.startPoint,
                endPoint: req.body.endPoint,
                truckId: req.body.truckId,
            });
            console.log("28");

        const updatedPosts = await User.findById(req.body.userId).lean().exec();
        console.log("31");
        updatedPosts.posts.push(posts._id);
        console.log("33");
        const user = await User.findByIdAndUpdate(req.body.userId, updatedPosts).lean().exec();
        console.log("35");
        return res.status(200).json(posts);
        console.log("37");
        
    } catch (error) {
        return res.status(400).send(error)
    }
})




router.delete("/:userId/:id", async (req, res) => {
    try {
        const posts = await Tweet.findByIdAndDelete(req.params.id).lean().exec();

        const user123 = await User.findById(req.params.userId).lean().exec();
        let x = user123.posts.filter((el) => {
            return el.toString() !== req.params.id
        })
        user123.posts = x;
        const user111 = await User.findByIdAndUpdate(req.params.userId,user123).lean().exec();

        return res.status(200).send("posts deleted")
    } catch (error) {
        return res.status(400).send(error)
    }
})


module.exports = router;