const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


// Matches with "/api/user"
router.route("/")
  .get(userController.findAll);

router.route("/users")
  .post(userController.create);


module.exports = router;