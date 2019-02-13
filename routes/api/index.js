const router = require("express").Router();
const kidsRoutes = require("./kids");
const userRoutes = require("./user");

// Kid routes
router.use("/kids", kidsRoutes);

//User routes
router.use("/user", userRoutes);

module.exports = router;
