import React from 'react';
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

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

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

function likePost() {
  console.log('Like post');
}

function commentOnPost() {
  console.log('Comment on post');
}

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount },
}) {
  return (
    <Card fluid>
      <CardContent>
        <Image floated="left" size="tiny" src={avatar} />
        <CardHeader>{choice}</CardHeader>
        <CardMeta as={Link} to={`/posts/${id}`}>
          {dayjs(createdAt).fromNow(true)}
        </CardMeta>
        <CardDescription>{body}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="yellow" basic>
            <Icon name="eye" />
          </Button>
          <Label basic color="yellow" pointing="left">
            {likeCount}
          </Label>
        </Button>

        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="green" basic>
            <Icon name="comments" />
          </Button>
          <Label basic inverted="true" color="green" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </CardContent>
    </Card>
  );
}

export default PostCard;
