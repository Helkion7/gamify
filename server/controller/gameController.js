const Game = require("../models/GameSchema.js");

const gameController = {
  getAllGames: async (req, res) => {
    try {
      const games = await Game.find(); // Call the find() method

      if (games.length > 0) {
        res.status(200).send({ msg: "games found", games: games });
      } else {
        res.status(404).send({ msg: "Games not found" });
      }
    } catch (error) {
      res.status(500).send({ msg: "Error retrieving games", error });
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

      // Save the game to the database
      const result = await game.save();

      // Send success response
      if (result._id) {
        res.status(201).send({ msg: "Successfully created game!" });
      } else {
        res.status(500).send({ msg: "Error creating game" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error creating game", error });
    }
  },

  getGame: async (req, res) => {
    // Make it async and use await
    try {
      const { id } = req.params;

      // Await the result of findById
      const game = await Game.findById(id);
      console.log("id", id);

      if (game) {
        res.status(200).send({ msg: "game found", game: game });
      } else {
        res.status(404).send({ msg: "Game not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error retrieving game", error });
    }
  },

  editGame: async (req, res) => {
    const { id } = req.params;
    const updateContent = req.body;

    try {
      const game = await Game.findByIdAndUpdate(id, updateContent);
      console.log(game, "game");
      res.status(200).send({ msg: "game updated", game: game });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error updating game", error });
    }
  },

  deleteGame: async (req, res) => {
    const { id } = req.params;

    const game = await Game.findByIdAndDelete(id);
    console.log(game);

    res.status(200).send({ msg: "game deleted", game: game });
  },
};

module.exports = gameController;
