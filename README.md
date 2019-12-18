# Mongoose API Workshop - Exercise 4 - Create full project structure

Continue working on your code for flats from the previous exercise.

We now want to structure our code better and create a full project folder structure.

## Add Models folder

* Add a folder "models"
* Create a file "flat.js" within that folder
* Outsource your flat schema and model into this file "flat.js"
* Export the Flat model from this file
* Import the Flat model in your server.js file
* Test if your API still works as expected with some fetch statements (testing get and post routes should be sufficient)
* Git Commit your work

## Add Routes folder

* Add a folder "routes"
* Create a file "flats.js" within that folder
* Outsouce all your flat routes from server.js into flats.js
* Remove from all routes the prefix "/flat
* Create an Express router in that file and attach all the routes to that router
* Import the Flat model here (because the Flat model is used now here in this file)
* Export the router object
* Import it in the server.js file and attach it to your express instance using app.use("/flat", router)
* Test again if your API still works (testing get and post routes)
* Git Commit your work


## Add Controllers folder

* Add a folder "controllers"
* Create a file "flats.js" within that folder
* Outsource all your flat request handlers functions (those functions with (req, res, next)) to function variables. Like so: const getFlats = (req, res, next) => {... getting all flats ... }
* Cut & paste these 5 methods into the new controllers/flats.js file
* Import the Flat model here (it is not needed in the routes/flats.js anymore)
* Export all the functions there
* Import the controller functions at the top of your routes/flats.js file
* Attach the controller functions to your routes. Like so: router.get("/", getFlats)
* Test again if your API still works (testing get and post routes)
* Git Commit your work

Congratulations!

In this series of exercises you just created step-by-step a fully functional API backend project structure.



