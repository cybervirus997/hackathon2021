const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    postsId: { type: mongoose.Schema.Types.ObjectId, ref: 'posts', required: true },
    commentTitle: { type: String, required: true },
    commentPic: {type: String},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },

    //  if doubt delte these

    userName: { type: String, required: true },
    
}, {
    versionKey: false,
    timestamps : true
})

module.exports = mongoose.model("comment", commentSchema);