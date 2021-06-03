  
const express = require('express');
const router = express.Router();
const foundRoutes = require("./api/foundroute");
const lostRoutes = require("./api/lostroute")

router.get('/', (req, res) => {
    res.send('Welcome to findpaws');
})
router.use("/api/found", foundRoutes)
router.use("/api/lost", lostRoutes)

module.exports = router;
