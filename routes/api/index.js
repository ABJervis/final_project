const router = require("express").Router();
const kidsRoutes = require("./kids");
const userRoutes = require("./user");
const apptRoutes = require("./appointment");

// Kid routes
router.use("/kids", kidsRoutes);

//User routes
router.use("/user", userRoutes);

//Appointment routes
router.use("/appointment", apptRoutes);

module.exports = router;
