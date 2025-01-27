const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController.js");

router.post("/gameId", reviewController.getReviewByUser);
router.get("/games/:id", reviewController.getReviewByGame);
router.get("/user/:id", reviewController.getReviewByUser);
router.get("/:id", reviewController.getReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
