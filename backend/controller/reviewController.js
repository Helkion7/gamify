const Review = require("../models/ReviewSchema.js");
const User = require("../models/UserSchema.js");
const Game = require("../models/GameSchema.js");

const reviewController = {
  createReview: async (req, res) => {
    try {
      const { gameId } = req.params;
      const { comment, recommended, stars } = req.body;
      const email = req.user.email;
      const userId = req.user.id;

      const review = await Review.create({
        user: userId,
        game: gameId,
        comment,
        recommended,
        stars,
      });

      if (!review) {
        return res.status(500).send({
          msg: "Something went wrong while creating the review",
        });
      }

      const updateGame = await Game.findByIdAndUpdate(
        gameId,
        { $push: { reviews: review._id } },
        { new: true }
      );

      if (!updateGame) {
        await Review.findByIdAndDelete(review._id); // Cleanup the created review
        return res.status(404).send({
          msg: "Game not found for review update",
        });
      }

      res.status(201).send({ msg: "Review successfully created" });
    } catch (error) {
      console.error("Error in createReview:", error);
      res.status(500).send({
        msg: "Internal server error",
        error: error.message,
      });
    }
  },

  getReviewByGame: async (req, res) => {
    try {
      const { id } = req.params;
      const reviews = await Review.find({ game: id });

      if (!reviews || reviews.length === 0) {
        return res.status(404).send({ msg: "No reviews found" });
      }

      res.status(200).send({
        msg: "Reviews found!",
        reviews,
      });
    } catch (error) {
      console.error("Error in getReviewByGame:", error);
      res.status(500).send({
        msg: "Internal server error",
        error: error.message,
      });
    }
  },

  getReviewByUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const reviews = await Review.find({ user: userId });

      if (!reviews || reviews.length === 0) {
        return res.status(404).send({ msg: "No reviews found for this user" });
      }

      res.status(200).send({
        msg: "User reviews found!",
        reviews,
      });
    } catch (error) {
      console.error("Error in getReviewByUser:", error);
      res.status(500).send({
        msg: "Internal server error",
        error: error.message,
      });
    }
  },

  getReview: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findById(id);

      if (!review) {
        return res.status(404).send({ msg: "Review not found" });
      }

      res.status(200).send({
        msg: "Found review",
        review,
      });
    } catch (error) {
      console.error("Error in getReview:", error);
      res.status(500).send({
        msg: "Internal server error",
        error: error.message,
      });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedReview = await Review.findByIdAndDelete(id);

      if (!deletedReview) {
        return res.status(404).send({ msg: "Review not found" });
      }

      // Remove review reference from the game
      await Game.findByIdAndUpdate(deletedReview.game, {
        $pull: { reviews: id },
      });

      res.status(200).send({ msg: "Review deleted successfully" });
    } catch (error) {
      console.error("Error in deleteReview:", error);
      res.status(500).send({
        msg: "Internal server error",
        error: error.message,
      });
    }
  },
};

module.exports = reviewController;
