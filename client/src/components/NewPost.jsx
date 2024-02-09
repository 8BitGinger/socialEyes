import { valueToObjectRepresentation } from '@apollo/client/utilities';
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from '../utils/hooks';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

// function submitPost() {
//   console.log('submit post');
// }

function NewPost() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: '',
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      console.log(result);
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });

      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });

      values.body = '';
    },
  });

  function createPostCallback() {
    createPost();
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h1 className="yellow">Share your thoughts:</h1>
        <Form.Field>
          <Form.TextArea
            className="newPost"
            placeholder="your thoughts here..."
            name="body"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button
            disabled={!values.body.trim()}
            type="Submit"
            inverted
            color="green"
          >
            Post
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <div className="ui error message" style={{ marginBottom: 20 }}>
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      body
      commentCount
      comments {
        body
        createdAt
        id
        username
        __typename
      }
      createdAt
      id
      likeCount
      likes {
        createdAt
        id
        username
        __typename
      }
      username
      __typename
    }
  }
`;

export default NewPost;
