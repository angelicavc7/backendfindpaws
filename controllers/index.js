const express = require("express");
const router = express.Router();
const foundRoutes = require("./api/foundRoute.js");
const lostRoutes = require("./api/lostRoute.js");

router.get("/", (req, res) => {
  res.send("Welcome to findpaws");
});
router.use("/api/found", foundRoutes);
router.use("/api/lost", lostRoutes);

module.exports = router;

// how to deploy to heroku?
// How do we know our app is ready to deploy to heroku?
// How do we link our react app with our deployed Heroku app?
// what routes do we need to get in order to render to our lost and search pages?
// How do we manage our add and delete buttons?
// how do we make it possible for the user to delete and add to their own post and have an update button that has found pet and deletes it from the db?
// How can we add a carousel to working app in react?

// TODOS:
// DEPLPOY APP TO HEROKU
// MAKE SURE APP IS RUNNING
// FINISH ROUTES
// GRAB USERS INFO AND SEND TO DATABASE
// HAVE DB MAKE CARD
// HAVE IT LINK TO OUR SEARCH PAGE AND DISPLAY BOTH LOST AND FOUND
// CREATE SEARCH BUTTON THAT APPLIES FILTERS SO THAT USER CAN SEARCH FOR PET
// UPDATE PETS THAT ARE FOUND AND DELETE FROM DB
// WE NEED UPDATE UPDATE AND DELETE BUTTONS
// FINISH UP APP DESIGN
