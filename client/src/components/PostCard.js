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

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function likePost() {
  console.log('Like post');
}

function commentOnPost() {
  console.log('Comment on post');
}

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  return (
    <Card fluid>
      <CardContent>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <CardHeader>{username}</CardHeader>
        <CardMeta as={Link} to={`/posts/${id}`}>
          {dayjs(createdAt).fromNow(true)}
        </CardMeta>
        <CardDescription>{body}</CardDescription>
      </CardContent>
      <CardContent extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="teal" basic>
            <Icon name="eye" />
          </Button>
          <Label basic color="teal" pointing="left">
            {likeCount}
          </Label>
        </Button>

        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button color="green" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="green" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </CardContent>
    </Card>
  );
}

export default PostCard;
