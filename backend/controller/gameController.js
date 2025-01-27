const Game = require("../models/GameSchema.js");

const gameController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Game.find();
      if (!games || games.length === 0) {
        return res.status(404).json({ msg: "No games found" });
      }
      return res.status(200).json({ msg: "Games found", games });
    } catch (error) {
      console.error("Error in getAllGames:", error);
      return res
        .status(500)
        .json({ msg: "Error retrieving games", error: error.message });
    }
  },

  createGame: async (req, res) => {
    try {
      const {
        title,
        price,
        publisher,
        developer,
        releaseDate,
        status,
        description,
        shortDescription,
      } = req.body;

      // Input validation
      if (!title || !price) {
        return res
          .status(400)
          .json({ msg: "Title and price are required fields" });
      }

      const game = new Game({
        title,
        price,
        publisher,
        developer,
        releaseDate,
        status,
        description,
        shortDescription,
      });

      const result = await game.save();
      return res.status(201).json({
        msg: "Successfully created game!",
        game: result,
      });
    } catch (error) {
      console.error("Error in createGame:", error);
      if (error.name === "ValidationError") {
        return res
          .status(400)
          .json({ msg: "Validation error", error: error.message });
      }
      return res
        .status(500)
        .json({ msg: "Error creating game", error: error.message });
    }
  },

  getGame: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Game ID is required" });
      }

      const game = await Game.findById(id);
      if (!game) {
        return res.status(404).json({ msg: "Game not found" });
      }

      return res.status(200).json({ msg: "Game found", game });
    } catch (error) {
      console.error("Error in getGame:", error);
      if (error.name === "CastError") {
        return res.status(400).json({ msg: "Invalid game ID format" });
      }
      return res
        .status(500)
        .json({ msg: "Error retrieving game", error: error.message });
    }
  },

  editGame: async (req, res) => {
    try {
      const { id } = req.params;
      const updateContent = req.body;

      if (!id) {
        return res.status(400).json({ msg: "Game ID is required" });
      }

      if (Object.keys(updateContent).length === 0) {
        return res.status(400).json({ msg: "Update content is required" });
      }

      const game = await Game.findByIdAndUpdate(id, updateContent, {
        new: true,
        runValidators: true,
      });

      if (!game) {
        return res.status(404).json({ msg: "Game not found" });
      }

      return res.status(200).json({ msg: "Game updated", game });
    } catch (error) {
      console.error("Error in editGame:", error);
      if (error.name === "ValidationError") {
        return res
          .status(400)
          .json({ msg: "Validation error", error: error.message });
      }
      if (error.name === "CastError") {
        return res.status(400).json({ msg: "Invalid game ID format" });
      }
      return res
        .status(500)
        .json({ msg: "Error updating game", error: error.message });
    }
  },

  deleteGame: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "Game ID is required" });
      }

      const game = await Game.findByIdAndDelete(id);
      if (!game) {
        return res.status(404).json({ msg: "Game not found" });
      }

      return res.status(200).json({ msg: "Game deleted", game });
    } catch (error) {
      console.error("Error in deleteGame:", error);
      if (error.name === "CastError") {
        return res.status(400).json({ msg: "Invalid game ID format" });
      }
      return res
        .status(500)
        .json({ msg: "Error deleting game", error: error.message });
    }
  },
};

module.exports = gameController;
