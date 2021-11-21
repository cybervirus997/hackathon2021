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
            truckNumber: req.body.truckNumber,
            truckName: req.body.truckName,
            capacity: req.body.capacity,
            occupied: req.body.occupied,
        });
        return res.status(200).json(truck);
    } catch (err) {
        return res.status(404).send(err.message)
    }
})

module.exports = router;