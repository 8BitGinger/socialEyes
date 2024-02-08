import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Label, Icon, Button } from 'semantic-ui-react';

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postsID: id },
  });

  const likeButton = user ? (
    liked ? (
      <Button color="yellow">
        <Icon name="eye" />
      </Button>
    ) : (
      <Button color="yellow" basic>
        <Icon name="eye" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="yellow" basic>
      <Icon name="eye" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
      {likeButton}

      <Label basic color="yellow" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postsID: ID!) {
    likePost(postsID: $postsID) {
      id
      likeCount
      likes {
        id
        username
      }
    }
  }
`;

export default LikeButton;
