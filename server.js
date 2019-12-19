const express = require("express")
const api = express()
const mongoose = require("mongoose")
const flatsRouter = require("./routes/flats")

// CONNECT TO MONGODB
const dbName = "flats"
const connOptions = {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}
mongoose.connect(`mongodb://localhost/${dbName}`, connOptions)

// USE JSON MIDDLEWARE, SO WE CAN CALL OUR API WITH FETCH & JSON DATA FROM THE BROWSER
api.use(express.json())

// CORS
api.use((req, res, next) => {
    res.set("ACCESS-CONTROL-ALLOW-ORIGIN", "*")
    res.set("ACCESS-CONTROL-ALLOW-HEADERS", "*")
    res.set("ACCESS-CONTROL-ALLOW-METHODS", "*")
    next()
})

// OPEN THE PORT
api.listen(3000, () => console.log("Listening on port 3000"))

api.use("/flat", flatsRouter)

api.use((err, req, res, next) => {
    let errMessage = err.message || err
    let errStatus = err.status || 500
    res.status(errStatus).send({error: errMessage})
})

/**
 * FETCH statements:
 * 
 * GET: fetch('http://localhost:3000/flat')
 * GET: fetch('http://localhost:3000/flat/15')
 * POST: fetch('http://localhost:3000/flat', 
{method: "POST", 
headers: {"Content-Type": "application/json" },
body: JSON.stringify({    
    address_full: "Turmstraße 33, 10551 Berlin",
    district: "Tiergarten",
    area_sqm: 65,
    rent: 645,
    landlord: "Flatify GmbH"
})}
)
.then(res => res.json())
.then(data => console.log(data))

   PATCH: fetch('http://localhost:3000/flat/15', {
             method: "PATCH", headers: {"Content-Type": "application/json"},
             body: JSON.stringify({firstname: "FirstnameNew", lastname: "LastnameNew"})
         })
   DELETE: fetch('http://localhost:3000/flat/7', { method: "DELETE" })
         })
*/
