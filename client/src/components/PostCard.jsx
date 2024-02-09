import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
  Icon,
  Label,
  Image,
  Button,
} from 'semantic-ui-react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import avatar from '../assets/coder.png';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

// var relativeTime = require('dayjs/plugin/relativeTime');
// dayjs.extend(relativeTime);

var options = [
  'IncognitoUser',
  'AnonymousUser',
  'SecretUser',
  'ShadowUser',
  'HiddenUser',
  'MysteryUser',
  'UnknownUser',
  'GhostUser',
  'StealthUser',
  'PhantomUser',
  'SilentUser',
  'InvisibleUser',
  'ConcealedUser',
  'CovertUser',
  'UnseenUser',
  'HiddenUser',
  'VeiledUser',
  'MaskedUser',
  'CloakedUser',
  'ObscuredUser',
  'DisguisedUser',
];
var choice = options[Math.floor(Math.random() * options.length)];

function PostCard({
  post: {
    body,
    createdAt,
    id,
    username,
    likes,
    comments,
    likeCount,
    commentCount,
  },
}) {
  function likePost() {
    console.log('Like post');
  }

  function deletePost() {
    console.log('Delete post');
  }

  const { user } = useContext(AuthContext);

  return (
    <Card fluid>
      <CardContent>
        <Image floated="left" size="tiny" src={avatar} />
        <CardHeader>{choice}</CardHeader>
        <CardMeta as={Link} to={`/posts/${id}`}>
          {createdAt}
        </CardMeta>
        <CardDescription>{body}</CardDescription>
      </CardContent>
      <CardContent extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />

        <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
          <Button color="green" basic>
            <Icon name="comments" />
          </Button>
          <Label basic inverted="true" color="green" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <DeleteButton postsID={id} callback={deletePost} />
        )}
      </CardContent>
    </Card>
  );
}

export default PostCard;
