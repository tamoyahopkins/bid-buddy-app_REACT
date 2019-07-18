import React, { Component } from "react";
import { Modal, Header, Form, Button } from "semantic-ui-react";
import { registerUser as register } from "../actions/auth"
import { connect } from "react-redux";
import logo from "../images/bid_buddy_logo_3.png";


class ClientRegisterForm extends Component {
    state = {
       username: "",
        password: "",
        role: "store"
    };
    handleRegister = e => {
      e.preventDefault()
  console.log("test")
        this.props.register({
          username: this.state.username,
          password: this.state.password,
          role: this.state.role
        })

    }
  
    handleChange = e => {
      this.setState({ passwordMatch: true })
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state)
    }

    render() {
        const { handleRegister, handleChange } = this
        const { passwordMatch } = this.state
        const { isLoading, err } = this.props;
    
        return (
          <Modal trigger={<a>Sign Up</a>} basic size='small'>
            <Header as='h1' content='Sign up for your very own Bid Buddy account!' />
            <Form>
              <Form.Group>
                <Form.Input 
                placeholder='User Name' 
                name='username' 
                type="text" 
                onChange={this.handleChange} 
                id="sellerName" required 
                />
                <Form.Input 
                placeholder='Email' 
                name='email' 
                type="text"  
                id="sellerEmail" required 
                />
              </Form.Group>

              <Form.Input 
              placeholder='Enter new password' 
              name='password' 
              type="password" 
              onChange={this.handleChange} 
              id="password" 
              autoComplete="new-password" required 
              />    

              <Form.Input 
              placeholder='Confirm Password' 
              name='passwordCheck' 
              type="password" 
              onChange={handleChange}
              id="passwordCheck" 
              autoComplete="new-password" required
              />
              <hr/>
              <Button 
              type="submit"
              onClick={handleRegister}
              >
                  Submit
              </Button>

            </Form>
            
          </Modal>
        )
      }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register })(ClientRegisterForm);