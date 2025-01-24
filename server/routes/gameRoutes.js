const express = require("express");
const router = express.Router();

const gameController = require("../controller/gameController");

router.get("/", gameController.getAllGames);
router.post("/", gameController.createGame);

router.get("/:id", gameController.getGame);
router.put("/:id", gameController.editGame);
router.delete("/:id", gameController.deleteGame);

module.exports = router;
