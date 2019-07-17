import React, { Component } from "react";
import { Modal, Header, Form, Button } from "semantic-ui-react";
import { registerUser as register } from "../actions/auth"
import { connect } from "react-redux";
import logo from "../images/bid_buddy_logo_3.png";


class clientRegisterForm extends Component {
    state = {
       username: "",
        password: ""
    };
    handleRegister = e => {
      e.preventDefault()
  console.log("test")
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({ passwordMatch: false })
      } else {
        this.props.register(this.state)
      }
      window.location.href='/scanitem'
    }
  
    handleChange = e => {
      this.setState({ passwordMatch: true })
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state)
    }
  

    // handleSubmit = e => {
    //   let promise = this.props.createUser(this.state)
    //   const target = e.target
    //   e.preventDefault()
    //   this.props.onClose()
    //   promise
    //   .then(this.props.setValidity(true))
    //   .catch(er=>{
    //     this.props.setValidity(false)
    //     document.getElementById("").setCustomValidity(" already Taken")
    //     target.reportValidity()
    //     setTimeout(() => {
    //       document.getElementById("").setCustomValidity("")
    //     }, 1000);
    //   })
    // }

    // verifyPassword(input){
    //   return (input.target.value !== document.getElementById("password").value) ?  input.target.setCustomValidity('Password Must be Matching.') : input.target.setCustomValidity('');
    // }

    render() {
        const { handleRegister, handleChange } = this
        const { passwordMatch } = this.state
        const { isLoading, err } = this.props;
    
        return (
          <Modal trigger={<a>Sign Up</a>} basic size='small'>
            <Header as='h1' content='Sign up for your very own Bid Buddy account!' />
            <Form onSubmit={handleRegister}>
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
                onChange={this.handleChange} 
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
            
              id="passwordCheck" 
              autoComplete="new-password" required
              />
              <hr/>
              <Button type="submit">
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
  { register }
)(clientRegisterForm);