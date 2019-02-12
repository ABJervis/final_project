const router = require("express").Router();
const kidsController = require("../../controllers/kidsController");

// Matches with "/api/kids/:id"
router
  .route("/:id")
  .get(kidsController.findById)
  .put(kidsController.update)
  .delete(kidsController.remove);


// Matches with "/api/kids"
router.route("/kids")
  .get(kidsController.findAll);

router.route("/kids")
  .post(kidsController.create);


module.exports = router;