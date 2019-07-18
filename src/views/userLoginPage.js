import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";
import RegisterForm from "./RegisterForm"
import { loginThenGoToUserProfile as login } from '../actions/auth';
import { connect } from "react-redux";
// import { registerUser as register } from "../actions/auth"
import Landing from './Landing'

class userLoginForm extends Component { 
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    console.log("test1")
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { handleChange } = this
    const { isLoading, err } = this.props

    return (
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
          placeholder='username'
          name="username"
          onChange={handleChange} 
          />
        
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            name="password"
            type='password'
            onChange={handleChange}
          />

          <Button 
          onClick={this.handleLogin}
          color='teal' 
          fluid size='large'>
            Login
          </Button>

        </Segment>
      </Form>
      <Message>
        New to us? {<RegisterForm />}
      </Message>
      <Message>
        Want to Know More? {<Landing/>}
        

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
  {login})(userLoginForm)