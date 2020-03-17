//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

//Connecting to remote Mongo db or local db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false
});

// Sets up request logging
app.use(logger("dev"));

//Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Static Directory
app.use(express.static("public"));

//Routes
require("./Develop/routes/api-routes")(app);
require("./Develop/routes/html-routes")(app);

//Starting the Express app
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});