// const mysql = require("mysql");
const sequelize = require("./config/connection");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// var allRoutes = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(cors({
//     origin:["herokuapp.com"]
// }));

// app.use('/',allRoutes);

// app.use(express.static(path.join(__dirname, 'public'))); // static assets in public folder for passing in front end js and css


sequelize.sync({ force: false })
    .then(() => {

         app.listen(PORT, () => console.log("Now listening"));
});
