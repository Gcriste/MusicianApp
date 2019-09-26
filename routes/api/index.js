const router = require("express").Router();
const gigRoutes = require("./gigs");
const userRoutes = require("./users");

// gig routes
router.use("/gigs", gigRoutes);
router.use("/users", userRoutes);

module.exports = router;
 