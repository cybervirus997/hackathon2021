const express = require('express');
const router = express.Router();

const Truck = require('../models/truck.model')


router.get("", async (req, res) => {
    try {
        const truck = await Truck.find().lean().exec();
        return res.status(200).json(truck);
    } catch (err) {
        return res.status(404).send(err.message)
    }
})

router.post("", async (req, res) => {
    try {
        const truck = await Truck.create({
            name: req.body.name,
            truckImage: req.body.truckImage,
            capacity : req.body.capacity,
        });
        return res.status(200).json(truck);
    } catch (err) {
        return res.status(404).send(err.message)
    }
})

module.exports = router;