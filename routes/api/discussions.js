const router = require("express").Router();
const discussionsController = require("../../controllers/discussionsController");

// Matches with "/api/discussions"
router.route("/")
  .get(discussionsController.findAll)
  .post(discussionsController.create);

// Matches with "/api/discussions/:userid"
router.route("/:userid")
  .get(discussionsController.findById)
  .put(discussionsController.update)
 

  router.route("/:id")
  .get(discussionsController.find)
  .delete(discussionsController.remove);


module.exports = router;