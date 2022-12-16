// (5) routes mahasiswa
const express = require('express')
const router = express.Router() 
const Senjata = require('../models/Senjata')

// import varifyToken
const verifyToken = require('../config/verifyToken')

// Create Data Mahasiswa
router.post('/', async(req, res) => {
    // tampung input data 
    const senjataPost = new Senjata({
        weapon: req.body.weapon,
        ammo: req.body.ammo
    })

    try {
        // simpan data ke mongoDB
        const senjata = await senjataPost.save()
        // response
        res.json(senjata)
    } catch (error) {
        res.json({message: error
        })
    }
})

// Read (method GET)
router.get('/', async(req, res) => {
    try {
        const senjata = await Senjata.find()
        res.json(senjata)
    } catch (error) {
        res.json({
            message:error
        })
    }
    
})

// Update (method PUT)
router.put('/:senjataId', async(req, res) => {
    // tampung data yang mau di ubah
    const data = {
        weapon: req.body.weapon,
        ammo: req.body.ammo
    }

    try {
        // update data disini
        const senjata = await Senjata.updateOne({
            _id: req.params.senjataId
        }, data)
        // response success
        res.json(senjata)
    } catch (error) {
        res.json({message: error
        })
    }
})

// Delete (method Delete)
router.delete('/:senjataId', async(req, res) => {
    try {
        // delete data disini
        const senjata = await Senjata.deleteOne({_id: req.params.senjataId})
        // response success
        res.json(senjata)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router