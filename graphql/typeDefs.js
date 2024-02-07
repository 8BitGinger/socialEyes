const { gql } = require('apollo-server');

const typeDefs = gql`
  type Posts {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Posts]
    getPost(postsID: ID!): Posts
    getUsers: [User]
    getUser(userID: ID!): User
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Posts!
    deletePost(postsID: ID!): String!
    createComment(postsID: String!, body: String!, username: String!): Posts!
    deleteComment(postsID: ID!, commentID: ID!): Posts!
    likePost(postsID: ID!): Posts!
  }
  # type Subscription {
  #   newPost: Posts!
  # }
`;

module.exports = typeDefs;
