import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Grid, GridRow } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

function HomePage() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  const posts = data?.getPosts;

  return (
    <Grid columns="two">
      <GridRow className="page-title">
        <h1>The Feed</h1>
      </GridRow>
      <GridRow>
        {loading ? (
          <h1>loading The Feed...</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </GridRow>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default HomePage;
