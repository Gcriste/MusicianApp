const router = require("express").Router();
const requestsController = require("../../controllers/requestsController");

// Matches with "/api/requests"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);


  router.route("/:userid")
  .get(requestsController.findById);

// Matches with "/api/requests/gigs/:gigid"
router.route("/:gigid")
  .get(requestsController.find)
  .put(requestsController.update);
  

router.route("/:id")
  .delete(requestsController.remove);

module.exports = router;
