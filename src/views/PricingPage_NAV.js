import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//note PricingPage_Nav takes props = userLogin location which 
//must be a string (e.g. "/home" r)
const PricingPage_Nav = (props) => (
  
    <Dropdown icon='settings' pointing className='link item'>
      <Dropdown.Menu>
        {/* <Dropdown.Header>Categories</Dropdown.Header> */}
        {/* <Dropdown.Item>
          <Dropdown text='Clothing'>
            <Dropdown.Menu>
              <Dropdown.Header>Mens</Dropdown.Header>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Pants</Dropdown.Item>
              <Dropdown.Item>Jeans</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Womens</Dropdown.Header>
              <Dropdown.Item>Dresses</Dropdown.Item>
              <Dropdown.Item>Shoes</Dropdown.Item>
              <Dropdown.Item>Bags</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item> */}
        <Dropdown.Item href="/">Scanner</Dropdown.Item>
        <Dropdown.Item href={props.logoutLocation}>Logout</Dropdown.Item>
        {/* <Dropdown.Divider />
        <Dropdown.Header>Order</Dropdown.Header>
        <Dropdown.Item>Status</Dropdown.Item>
        <Dropdown.Item>Cancellations</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  
)

export default PricingPage_Nav;
