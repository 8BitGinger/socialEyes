const Posts = require('../../models/Posts');
const checkAuth = require('../util/checkAuth');
const { AuthenticationError, UserInputError } = require('apollo-server');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const post = await Posts.find().sort({ createdAt: -1 });
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPost(_, { postsID }) {
      try {
        const post = await Posts.findById(postsID);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context);

      if (args.body.trim() === '') {
        throw new Error('Post body must not be empty');
      }

      const newPost = new Posts({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      const post = await newPost.save();

      return post;
    },

    async deletePost(_, { postsID }, context) {
      const user = checkAuth(context);

      try {
        const post = await Posts.findById(postsID);
        if (user.username === post.username) {
          await post.deleteOne();
          return 'Post deleted successfully';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async likePost(_, { postsID }, context) {
      const { username } = checkAuth(context);

      const post = await Posts.findById(postsID);
      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          // Post already liked, unlike it
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // Not liked, like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }

        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    },
  },
};
