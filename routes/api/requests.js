const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

// Matches with "/api/requests"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

// Matches with "/api/requests/:gigid"
router.route("/:gigid")
  .get(requestsController.find)
  .put(requestsController.update)
  .delete(requestsController.remove);

  
//   router.route("/:userid")
//   .get(requestsController.findById);

module.exports = router;
