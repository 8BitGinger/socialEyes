import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import { Grid, Card, Button, Image, Icon } from 'semantic-ui-react';
import dayjs from 'dayjs';
import LikeButton from '../components/LikeButton';

import { AuthContext } from '../context/auth';
import DeleteButton from '../components/DeleteButton';

function SinglePost(props) {
  const postsID = window.location.pathname.split('/')[2];

  console.log(postsID);

  const { user } = useContext(AuthContext);

  const {
    data: { getPost },
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postsID,
    },
  });

  let postMarkup;

  if (!getPost) {
    postMarkup = <p>Loading post...</p>;
  } else {
    const {
      id,
      body,
      createdAt,
      username,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getPost;

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="https://img.freepik.com/premium-vector/man-silhouette-profile-male-avatar-anonymous-icon-censored-face_434359-85.jpg?w=996"
              size="small"
              floated="right"
            />
          </Grid.Column>

          <Grid.Column width={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{dayjs(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
              </Card.Content>
              <hr />
              <Card.Content extra>
                <LikeButton user={user} post={{ id, likeCount, likes }} />
                <Button
                  as="div"
                  labelPosition="right"
                  onClick={() => console.log('Comment on post')}
                >
                  <Button basic color="blue">
                    <Icon name="comments" />
                  </Button>
                  <label basic color="blue" pointing="left">
                    {commentCount}
                  </label>
                </Button>
                {user && user.username === username && (
                  <DeleteButton postsID={id} />
                )}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return postMarkup;
}

export const FETCH_POST_QUERY = gql`
  query ($postsID: ID!) {
    getPost(postsID: $postsID) {
      body
      commentCount
      comments {
        body
        createdAt
        id
        username
      }
      createdAt
      id
      likeCount
      likes {
        username
      }
      username
    }
  }
`;

export default SinglePost;
