const router = require("express").Router();
const kidRoutes = require("./SelectKid");

// Book routes
router.use("/SelectKid", kidRoutes);

module.exports = router;