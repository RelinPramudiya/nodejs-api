// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const SenjataPUBGSchema = mongoose.Schema({
    // Buat Schema data
    weapon: {
        type: String,
        required: true
    },
    ammo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Senjata', SenjataPUBGSchema)