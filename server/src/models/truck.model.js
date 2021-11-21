const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
    truckNumber: { type: String, required: true },
    truckName: { type: String, required: true },
    truckImage: { type: String, default:"https://user-images.githubusercontent.com/72969348/142743122-02c860ef-a8c3-461f-a539-f74715e98aaa.png" },
    capacity: { type: String, required: true },
    occupied: {type: String}
}, {
    versionKey: false,
    timestamps : false
})

module.exports = mongoose.model("truck", truckSchema);