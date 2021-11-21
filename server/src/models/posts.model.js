const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    title: { type: String, required: true },
    startPoint: { type: String, required: true },
    endPoint: { type: String, required: true },
    price: { type: String},
    occupied: { type: String},
    capacity: { type: String},
    image: { type: String, default: '' },
    truckId: {type: mongoose.Schema.Types.ObjectId, ref: 'truck'},
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('posts', postsSchema);