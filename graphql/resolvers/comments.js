const { AuthenticationError, UserInputError } = require('apollo-server');

const Posts = require('../../models/Posts');
const checkAuth = require('../util/checkAuth');

module.exports = {
  Mutation: {
    createComment: async (_, { postsID, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not empty',
          },
        });
      }

      const post = await Posts.findById(postsID);

      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError('Post not found');
    },
    async deleteComment(_, { postsID, commentID }, context) {
      const { username } = checkAuth(context);

      const post = await Posts.findById(postsID);

      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentID);

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } else {
        throw new UserInputError('Post not found');
      }
    },
  },
};
