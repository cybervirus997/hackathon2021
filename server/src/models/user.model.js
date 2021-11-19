
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    email: { type: String, required: true,unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true ,unique: true},
    profile_pic: { type: String ,default:"https://i.imgur.com/nRhKKpR.png"},
    cover_pic: { type: String, default:"https://i.imgur.com/lnd2NHQ.png"},
    location: { type: String},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }],
    userRoles: {type: String, required: true }
}, {
    versionKey: false,
    timestampKey: true,
})

const User = mongoose.model("user", userSchema);

module.exports = User;