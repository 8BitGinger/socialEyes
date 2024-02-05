import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import logo from '../components/tinyLogo - no back.png';

function Register() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result);
      window.location = '/';
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
      console.log(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <div className="row">
          <img src={logo} alt="news" className="logo-image" />

          <h1>ign Up!</h1>
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
          label="Email"
          placeholder="Email.."
          name="email"
          type="email"
          value={values.email}
          error={errors.email ? true : false}
          autoComplete="current-email"
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
        <Form.Input
          label="Confirm Password"
          placeholder="Confirm Password.."
          name="confirmPassword"
          type="password"
          autoComplete="current-password"
          error={errors.comfirmPassword ? true : false}
          value={values.confirmPassword}
          onChange={onChange}
        />
        <Button type="submit" inverted color="green" className="colorButton">
          Register
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
