// const mysql = require("mysql");
const sequelize = require("./config/connection");
const express = require("express");
const allRoutes = require("./controllers")

const app = express();
const PORT = process.env.PORT || 3001;

// var allRoutes = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({ force: false })
    .then(() => {

         app.listen(PORT, () => console.log("Now listening"));
});
