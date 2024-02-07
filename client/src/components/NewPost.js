import React, { Component } from 'react';
import { CommentGroup, Form, FormTextArea, Button } from 'semantic-ui-react';

function submitPost() {
  console.log('submit post');
}

const NewPost = () => {
  return (
    <CommentGroup className="newPost">
      <h1>Share your thoughts:</h1>
      <Form submit>
        <FormTextArea placeholder="your thoughts here.." />
        <Button
          content="Post"
          labelPosition="left"
          icon="plus square"
          inverted
          color="yellow"
          onClick={submitPost}
        />
      </Form>
    </CommentGroup>
  );
};

export default NewPost;
