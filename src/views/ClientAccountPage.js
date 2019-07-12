import React, {Component} from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Form,
} from 'semantic-ui-react'
import logo from "../images/bid_buddy_logo_3.png";

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
                <div>
                    <h2>Product Dash</h2>       
                    <h3 class="header-text">Catagory</h3>
                    <button class="dash-button">+</button>
                </div>
                <div>
                    <h3 class="header-text">Brand</h3>
                    <button class="dash-button">+</button>
                </div>
                <div>
                    <h3 class="header-text">Volume</h3>
                    <button class="dash-button">+</button>
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

