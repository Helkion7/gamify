const reviewController = {
  createReview: async () => {
    const { gameId } = req.params;
    const { comment, recommended, stars } = req.body;
  },
  getReviewByGame: async () => {},
  getReviewByUser: async () => {},
  getReview: async () => {},
  deleteReview: async () => {},
};

module.exports = reviewController;
