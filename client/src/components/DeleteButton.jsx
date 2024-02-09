import React, { useState } from 'react';
import { Icon, Confirm, Button } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

function deletePost() {
  console.log('Delete post');
}

const DeleteButton = (props) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update() {
      setConfirmOpen(false);
      // TODO remove post from cache
    },
    variables: {
      postsID: props.postsID,
    },
  });

  return (
    <>
      <Button
        as="div"
        inverted
        color="red"
        floated="right"
        onClick={() => setConfirmOpen(true)}
        style={{ margin: 5 }}
      >
        <Icon name="trash" style={{ margin: 0 }} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePost}
      />
    </>
  );
};

const DELETE_POST_MUTATION = gql`
  mutation Mutation($postsID: ID!) {
    deletePost(postsID: $postsID)
  }
`;
export default DeleteButton;
