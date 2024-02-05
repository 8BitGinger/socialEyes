import React from 'react';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';
import logo from '../components/tinyLogo - no back.png';

function Profile() {
  return (
    <div className="profile-container">
      <Card>
        <Image
          src="https://img.freepik.com/premium-vector/man-silhouette-profile-male-avatar-anonymous-icon-censored-face_434359-85.jpg?w=996"
          wrapped
          ui={false}
        />
        <CardContent>
          <CardHeader>ryanfann1</CardHeader>
          <CardMeta>
            <span className="date">Joined in 2024</span>
          </CardMeta>
          <CardDescription>
            Ryan is a web developer living in San Antonio, Texas.
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <a>
            <Icon name="user" />
            232 Friends
          </a>
        </CardContent>
      </Card>
      <div className="logo-image fixed-btm">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default Profile;
