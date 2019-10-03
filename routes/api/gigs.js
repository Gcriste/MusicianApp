const router = require("express").Router();
const gigsController = require("../../controllers/gigsController");

// Matches with "/api/gigs"
router.route("/")
  .get(gigsController.findAll)
  .post(gigsController.create);

// Matches with "/api/gigs/:userid"
router.route("/:userid")
  .get(gigsController.findById)
  .put(gigsController.update)
 

  router.route("/:id")
  .get(gigsController.find)
  .delete(gigsController.remove);


module.exports = router;
