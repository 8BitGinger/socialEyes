import gql from 'graphql-tag';
import React, { useContext, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import logo from '../assets/tinyLogo - no back.png';

import { AuthContext } from '../context/auth';
import { useForm } from '../utils/hooks';

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const initialState = {
    username: '',

    password: '',
  };
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(result.data.login);
      context.login(result.data.login);
      window.location = '/profile';
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]);
      console.log(err.graphQLErrors[0]);
    },
    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <div className="row social">
          <img src={logo} alt="news" className="logo-image" />

          <h1>ign in!</h1>
        </div>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
          value={values.username}
          error={errors.username ? true : false}
          autoComplete="current-username"
          onChange={onChange}
        />

        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          autoComplete="current-password"
          onChange={onChange}
        />

        <Button type="submit" inverted color="green" className="colorButton">
          Log In
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(password: $password, username: $username) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
