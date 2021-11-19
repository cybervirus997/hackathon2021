const express = require('express');
const router = express.Router();

const User = require('../models/user.model')

router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).json(user);
    }
    catch (err)
    {
        return res.status(404).send(err.message)
    }
})


router.get("/profiledata/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate("posts").lean().exec();
        return res.status(200).json(user);
    }
    catch (err)
    {
        return res.status(404).send(err.message)
    }
})


router.post("", async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            profile_pic: req.body.profile_pic,
            cover_pic: req.body.cover_pic,
            location: req.body.location,
            posts: req.body.posts,
            userRoles: req.body.userRoles
        })
        return res.status(201).send(user);
    }
    catch (err)
    {
        return res.status(401).send(err.message)
    }
})

                // username: req.params.username,
                // cover_pic: req.file.path.slice(85)

router.patch("/:userId", async (req, res) => {
    try {
        const userDefault = await User.findById(req.params.userId).lean().exec();
        const user = await User.findByIdAndUpdate(req.params.userId,{ ...userDefault, ...req.body });
        
        return res.status(201).send("user updated");
    }
    catch (err)
    {
        return res.status(401).send(err.message)
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndDelete(req.params.id)
        return res.status(201).send(user);
    }
    catch (err)
    {
        return res.status(401).send(err.message)
    }
})
module.exports = router;