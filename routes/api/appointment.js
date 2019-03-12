const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

// Matches with "/api/appointment"
router.route("/")
  .get(appointmentController.findAll)
  .post(appointmentController.create)



// Matches with "/api/appointment/:id"
router
  .route("/:id")
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

//Matches with "api/appointment/"
router.route("/appointment")
  .post(appointmentController.create);


module.exports = router;