const Tag = require("../models/TagSchema");

const tagController = {
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.find();
      res.status(200).send({ msg: "Tags found", tags: tags });
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Error retrieving tags", error: error.message });
    }
  },

  createTag: async (req, res) => {
    try {
      const { name } = req.body;
      const tag = new Tag({ name });
      const result = await tag.save();

      if (result._id) {
        res.status(201).send({ msg: "Successfully created tag!" });
      }
    } catch (error) {
      res.status(500).send({ msg: "Error creating tag", error: error.message });
    }
  },

  getTag: async (req, res) => {
    try {
      const { id } = req.params;
      const tag = await Tag.findById(id);
      if (tag) {
        res.status(200).send({ msg: "Tag found", tag: tag });
      } else {
        res.status(404).send({ msg: "No tag found" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Error retrieving tag", error: error.message });
    }
  },

  updateTag: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const tag = await Tag.findByIdAndUpdate(id, { name }, { new: true });
      if (tag) {
        res.status(202).send({ msg: "Tag updated", tag: tag });
      } else {
        res.status(404).send({ msg: "No tag found" });
      }
    } catch (error) {
      res.status(500).send({ msg: "Error updating tag", error: error.message });
    }
  },

  deleteTag: async (req, res) => {
    try {
      const { id } = req.params;
      const tag = await Tag.findByIdAndDelete(id);
      if (tag) {
        res.status(200).send({ msg: "Tag deleted" });
      } else {
        res.status(404).send({ msg: "No tag found" });
      }
    } catch (error) {
      res.status(500).send({ msg: "Error deleting tag", error: error.message });
    }
  },
};

module.exports = tagController;
