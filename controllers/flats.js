const Flat = require("../models/flat")

const getFlats = async (req, res, next) => {
    let flats = await Flat.find()
    res.send(flats)
}

const getFlat = async (req, res, next) => {
    let id = req.params.id
    console.log("Param: ",  id)
    try {
        let flat = await Flat.findById(id)
        res.send(flat)
    }
    catch(err) {
        next(err)
    }
}

const createFlat = async (req, res, next) => {
    let flatPosted = req.body
    console.log("Flat posted:", flatPosted)
    try {
        let flatCreated = Flat.create(flatPosted)
        res.send(flatCreated)
    }
    catch(err) {
        next(err)
    }
}

const updateFlat = async (req, res, next) => {
    let id = req.params.id
    let flatUpdate = req.body
    console.log("Param: ", id)
    console.log("Flat patch sent:", flatUpdate)
    // the option {new: true} causes that we get 
    // the UPDATED document back after update operation.
    try {
        let flatUpdated = await Flat.findByIdAndUpdate(id, flatUpdate, {new: true})
        res.send(flatUpdated)
    }
    catch(err) {
        next(err)
    } 
}

const deleteFlat = async (req, res, next) => {
    let id = req.params.id
    console.log("Param:", id)
    try {
        let flatDeleted = await Flat.findByIdAndDelete(id)
        res.send(flatDeleted)
    }
    catch(err) {
        next(err) 
    }
}

module.exports = { 
    getFlat, getFlats, createFlat, updateFlat, deleteFlat 
}