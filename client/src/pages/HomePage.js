import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Grid, GridRow } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import logo from '../components/tinyLogo - no back.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function HomePage() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  const posts = data?.getPosts;

  return (
    <>
      <Grid columns="three">
        <GridRow className="page-title">
          <motion.div
            variants={fadeIn('left', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="row"
          >
            <img src={logo} alt="news" className="logo-image" />
            <h1>ocial Eyes</h1>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2>The anti-social media</h2>
          </motion.div>
        </GridRow>
        <GridRow className="page-picture">
          <h1>The Feed</h1>
          <div className="banner"></div>
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
    </>
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
