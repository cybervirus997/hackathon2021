const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    truckImage: { type: String, required: true },
    capacity : { type: String, required: true}
}, {
    versionKey: false,
    timestamps : false
})

module.exports = mongoose.model("truck", truckSchema);