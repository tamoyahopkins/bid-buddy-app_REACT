import React, {Component} from 'react'
// import Modal from "../components/Modals"
import {
    Modal, 
    Header,
    Button, 
    Icon,   
  Container,
  Divider,
  Dropdown,
  Grid,
  Label,
  Input, 
  Image,
  List,
  Menu,
  Segment,
  Form,
} from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";

let categories = [
    { key: 'Accessories', text: 'Accessories', value: 'Accessories' },
    { key: 'Electronics', text: 'Electronics', value: 'Electronics' },
    { key: 'Furniture', text: 'Furniture', value: 'Furniture' },
    { key: 'Hardware', text: 'Hardware', value: 'Hardware' },
    { key: 'Health & Beauty', text: 'Health & Beauty', value: 'Health & Beauty' },
    { key: 'Home & Garden', text: 'Home & Garden', value: 'Home & Garden' },
    { key: 'Luggage & Bags', text: 'Luggage & Bags', value: 'Luggage & Bags' },
    { key: 'Women Shoes', text: 'Women Shoes', value: 'Womens Shoes' },
    { key: 'Mens Shoes', text: 'Mens Shoes', value: 'Mens Shoes' },
    { key: 'Kids Shoes', text: 'Kids Shoes', value: 'Kids Shoes' },
    { key: 'Womens Clothing', text: 'Womens Clothing', value: 'Womens Clothing' },
    { key: 'Mens Clothing', text: 'Mens Clothing', value: 'Mens Clothing' },
    { key: 'Toys & Games', text: 'Toys & Games', value: 'Toys & Games'},
]

let handleSubmit = () => {

}


const addButton = () => 
      (<Modal trigger={<Button color='dark blue'>+</Button>} closeIcon>
    <Grid rows={2}>
        <Grid.Row><Header as='h2' icon='hand point up' content='Accept bids automatically by setting custom thresholds below.' /></Grid.Row>
        <Grid.Row><Header as='h4'>Set threshold by category</Header></Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column><Dropdown placeholder='Categories' fluid multiple selection options={categories} /></Grid.Column>
            <Grid.Column><Input labelPosition="right" type="text" placeholder='Threshold (%)'>
            <input/><Label basic>%</Label></Input></Grid.Column>
        </Grid.Row>
        <Divider/>
        <Grid.Row><Header as='h4'>Set threshold by brand name</Header></Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column><Input placeholder='Enter Brand Name'/></Grid.Column>
            <Grid.Column><Input labelPosition="right" type="text" placeholder='Threshold (%)'>
            <input/><Label basic>%</Label></Input></Grid.Column>
        </Grid.Row>
        <Divider/>
       <Grid.Row> <Header as='h4'>Set threshold by volumne in stock</Header> </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column><Input placeholder='Enter Volume Amount'/></Grid.Column>
            <Grid.Column><Input labelPosition="right" type="text" placeholder='Threshold (%)'>
            <input/><Label basic>%</Label></Input></Grid.Column>
        </Grid.Row>
        <Divider/>
        <Grid.Row><Header as='h4'>Set threshold by age of product in stock</Header></Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column><Input placeholder='Age limit'/></Grid.Column>
            <Grid.Column><Input labelPosition="right" type="text" placeholder='Threshold (%)'>
            <input/><Label basic>%</Label></Input></Grid.Column>
        </Grid.Row>
        <Grid.Row><Header as='h4'>Set threshold by item number (UPC)</Header></Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column><Input placeholder='Item Number'/></Grid.Column>
            <Grid.Column><Input labelPosition="right" type="text" placeholder='Threshold (%)'>
            <input/><Label basic>%</Label></Input></Grid.Column>
        </Grid.Row>
        <Grid.Row><Button color='orange' primary>Set Thresholds</Button></Grid.Row>
    </Grid>
  </Modal>
)

const GridExampleCelledInternally = () => (
<React.Fragment>
    <div id="clientAccount-Container">
        {/* image div */}
        <div id="logo-div">
            <img class="accountLogos" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg"></img>
            <h1 id="clientAccountPage-headerText"> Account Page </h1>
            <img id="accountLogos-Right" class="accountLogos" src={logo}></img>
        </div>
        {/* navbar div */}
        <div id="clientPageNav">
            <div><span>You have <strong>0</strong> bids unanswered.</span></div>
            <div id="clientPageNav-buttons">
                <button>Profile</button>
                <button>Logout</button>
            </div>
        </div>
        {/* feed container div */}
        <div id="feedContainer">
            <div id="leftCol">
                <div className="productDash">
                    Product Dash
                    <br></br>
                    <br></br>
                    {addButton()}      
                </div>
                <div className="header-text">
                    Catagory
                    {/* <button class="dash-button">+</button> */}
                </div>
                <div className="header-text">
                    Brand
                    {/* <button class="dash-button">+</button> */}
                </div>
                <div className="header-text">
                    Volume
                    {/* <button class="dash-button">+</button> */}
                </div>
                <div className="header-text">
                    Age
                    {/* <button class="dash-button">+</button> */}
                </div>
                <div className="header-text">
                    Item Number (UPC)
                    {/* <button class="dash-button">+</button> */}
                </div>

            </div>
            <div id="rightCol">
                {/* BID CARD: will append to the page */}
                <div id="bidCard-Container">
                    <img id="bidCard-section-left" class="bidCard-section" src="http://s7d4.scene7.com/is/image/BonTon/1366594?$ibm_large$"></img>
                    <div id="bidCard-section-middle" class="bidCard-section">
                        <label><strong>Item ID:</strong> <text>190561642822</text></label>
                        <br></br>
                        <label><strong>Item Name: </strong><text>MICHAEL Michael Kors "Kendrick" Slip On Shoes</text></label>
                        <br></br>
                        <label><strong>Description: </strong><text>Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...Here is my first item description...</text></label>
                    </div>
                    <div id="bidCard-section-right" class="bidCard-section">
                        <button class="bidResponseButton">Accept</button>
                        <button class="bidResponseButton">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
)

export default GridExampleCelledInternally

