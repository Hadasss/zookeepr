// This is a central hub for all routing functions that will be added to the application

const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");

router.use(animalRoutes);

module.exports = router;
