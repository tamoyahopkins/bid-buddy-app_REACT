import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";
import { loginThenGoToUserProfile as login } from "../actions/auth"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import RegisterForm from './RegisterForm'


const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button onClick={()=> window.location.href='/scanitem'} color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? {<RegisterForm/>}
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm

//test