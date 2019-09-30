const router = require("express").Router();
const gigRoutes = require("./gigs");
const userRoutes = require("./users");
const requestRoutes = require("./requests");

// gig routes
router.use("/gigs", gigRoutes);
router.use("/users", userRoutes);
router.use("/requests", requestRoutes);

module.exports = router;
 