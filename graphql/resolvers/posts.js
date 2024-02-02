const Posts = require('../../models/Posts');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const post = await Posts.find();
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
