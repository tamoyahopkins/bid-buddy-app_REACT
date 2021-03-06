import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";
import { loginThenGoToUserProfile as login } from "../actions/auth"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import ClientRegisterForm from './clientRegisterForm'


class ClientLoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    console.log("test1")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Username'
            type='text'
            name='username'
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name='password'
            onChange={this.handleChange}
          />

          <Button 
          onClick={this.handleLogin}
          color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? {<ClientRegisterForm/>}
      </Message>
    </Grid.Column>
  </Grid>
  )
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(ClientLoginForm)

