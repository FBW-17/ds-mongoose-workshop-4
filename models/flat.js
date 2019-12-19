const mongoose = require("mongoose")
const Schema = mongoose.Schema

const flatSchema = new Schema({
    address_full: {
        type: String,
        required: true
    },
    district: String,
    area_sqm: Number,
    rooms: {
        type: Number,
        default: 1
    },
    rent: Number,
    landlord: String
}, {versionKey: false})

const Flat = mongoose.model("flat", flatSchema)

module.exports = Flat