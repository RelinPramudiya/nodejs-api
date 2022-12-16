// (1) Buat Schema User
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // Schema data
    weapon: {
        type: String,
        required: true,
        max: 45
    },
    ammo: {
        type: String,
        required: true,
        max: 45
    },
    tipe: {
        type: String,
        required: true,
        max: 45
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)