const router = require("express").Router();
const kidsRoutes = require("./kids");

// Kid routes
router.use("/kids", kidsRoutes);

module.exports = router;
