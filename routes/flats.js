const express = require("express")
const router = express.Router()
const { getFlats, getFlat, createFlat, updateFlat, deleteFlat } = require("../controllers/flats")

// GET ALL FLATS
router.get("/", getFlats)

// GET ONE FLAT
router.get("/:id", getFlat)

// CREATE FLAT
router.post("/", createFlat)

// UPDATE FLAT
router.patch("/:id", updateFlat)

// DELETE FLAT
router.delete("/:id", deleteFlat)

module.exports = router