import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";
import { loginThenGoToUserProfile as login } from "../actions/auth"
import { connect } from "react-redux";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    console.log("test2")
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    console.log("test")
    this.setState({ [e.target.name]: e.target.value });
  };
render() {
// const { handleChange, handleLogin } = this;
  return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} /> Log-in to your account
      </Header>

      <Form size='large'>
        <Segment stacked>
          <Form.Input 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          onChange={this.handleChange} />

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />

          <Button 
          color='teal' 
          fluid size='large'
          onClick={this.handleLogin}
          >
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'> Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  )
}
}

export default connect(
  ({auth}) => ({
          isLoading: auth.loginLoading,
        err: auth.loginError
      }),
  {login})(LoginForm);


//test