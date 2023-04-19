const router = require("express").Router();

const concertsRoutes = require("./concerts.routes")
router.use("/concerts", concertsRoutes)

module.exports = router;
