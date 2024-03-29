const { model, Schema } = require('mongoose');

//can specifiy here that fields are required, but we will specify on the graphql side versus the mongo side
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  token: String,
  posts: {
    type: Schema.Types.ObjectId,
    ref: 'posts',
  },
});

module.exports = model('User', userSchema);
