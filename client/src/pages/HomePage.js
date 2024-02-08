import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Grid, Transition, GridRow, Button } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import logo from '../assets/tinyLogo - no back.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import DevCard from '../components/developer';
import NewPost from '../components/NewPost';
import { AuthContext } from '../context/auth';
import { FETCH_POSTS_QUERY } from '../utils/graphql';

function HomePage() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  const posts = data?.getPosts;

  return (
    <>
      <Grid id="top" columns="two">
        <GridRow className="page-title">
          <motion.div
            variants={fadeIn('left', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="row social scoot-left"
          >
            <img src={logo} alt="news" className="logo-image" />
            <h1>ocial Eyes</h1>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.9)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="anti"
          >
            <h2>The anti-social media</h2>
          </motion.div>
        </GridRow>

        {user && (
          <>
            <GridRow className="page-picture">
              <a href="#post">
                <div className="post-banner"></div>
              </a>
              <h1>New Post</h1>
            </GridRow>

            <GridRow id="post" className="contain-post">
              <NewPost />
            </GridRow>
          </>
        )}

        <GridRow className="page-picture">
          <a href="#feed">
            <div className="banner"></div>
          </a>
          <h1>The Feed</h1>
        </GridRow>

        <GridRow id="feed">
          {loading ? (
            <h1>loading The Feed...</h1>
          ) : (
            <Transition.Group>
              {posts &&
                posts.map((post) => (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                ))}
            </Transition.Group>
          )}
        </GridRow>
        <div className="ui divider"></div>
        <GridRow className="page-picture">
          <a href="#dev">
            <div className="dev-banner"></div>
          </a>
          <h1>The Developer</h1>
        </GridRow>
        <GridRow id="dev">
          <Grid.Column className="dev">
            <DevCard />
          </Grid.Column>
        </GridRow>
        <div className="ui divider"></div>
        <GridRow>
          <div className="foot">
            <a href="/">
              <Button className="ui button" inverted color="green">
                Reload Feed
              </Button>
            </a>
          </div>
        </GridRow>
      </Grid>
    </>
  );
}

export default HomePage;
