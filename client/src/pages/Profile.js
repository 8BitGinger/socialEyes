import React, { useContext } from 'react';
import {
  CardMeta,
  CardHeader,
  Button,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';
import logo from '../assets/tinyLogo - no back.png';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { AuthContext } from '../context/auth';
import { Link } from 'react-router-dom';

function Profile() {
  // const { data, loading } = useQuery(FETCH_USER_QUERY);

  // const user = data?.getUser;

  const context = useContext(AuthContext);
  console.log(context);

  return (
    <>
      <div className="profile-container">
        <Card>
          <h2 className="green">Your Hidden Profile</h2>

          <Image
            src="https://img.freepik.com/premium-vector/man-silhouette-profile-male-avatar-anonymous-icon-censored-face_434359-85.jpg?w=996"
            wrapped
            ui={false}
            className="profile-pic"
          />
          <CardContent>
            <CardHeader>{context.user.username}</CardHeader>
            <CardMeta>
              <span className="date">Email: {context.user.email}</span>
            </CardMeta>
          </CardContent>
          <CardContent extra className="profile-foot">
            <div className="col">
              <Icon className="profile-icon" name="comments" />
              232 Comments
            </div>
            <div className="col">
              <Icon className="profile-icon" name="picture" />
              55 posts
            </div>
          </CardContent>
          <CardContent>
            <Button
              as={Link}
              to="/"
              className="ui button"
              inverted
              color="green"
            >
              View the Feed
            </Button>
          </CardContent>
        </Card>
        <div className="logo-image">
          <Image src={logo}></Image>
        </div>
      </div>
    </>
  );
}

// const FETCH_USER_QUERY = gql`
//   {
//     getUser(userID: $userId) {
//       username
//       createdAt
//     }
//   }
// `;

export default Profile;
