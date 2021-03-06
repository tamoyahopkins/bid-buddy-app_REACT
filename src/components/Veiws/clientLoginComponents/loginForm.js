// // import { loginThenGoToUserProfile as login } from "../../../actions";
import React, { Component } from "./node_modules/react";
import { Form, Button } from "./node_modules/semantic-ui-react";
// // import { connect } from "react-redux";

export default class LoginForm extends Component {
  handleLogin = e => {
    e.preventDefault();
    this.props.login({ username: this.state.username, password: this.state.password });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Form onSubmit={this.handleLogin}>
          <label htmlFor="username" >Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <Button type="submit" disabled={this.props.isLoading}>
            Login
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}

//test
