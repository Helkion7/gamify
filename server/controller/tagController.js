const Tag = require("../models/TagSchema");

const tagController = {
  getAllTags: (req, res) => {
    const tags = Tag.find();
    res.status(200).send({ msg: "tags found", tags: tags });
  },
  createTag: async (req, res) => {
    const { name } = req.body;
    const tag = new Tag({ name });
    const result = tag.save();

    if (result._id) {
      res.status(201).send({ msg: "Successfully created tag!" });
    }
  },
  getTag: (req, res) => {
    const { id } = req.params;
  },
  updateTag: (req, res) => {
    const { id } = req.params;
  },
  deleteTag: (req, res) => {
    const { id } = req.params;
  },
};

module.exports = tagController;
