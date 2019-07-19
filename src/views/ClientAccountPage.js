import React, { Component } from "react";
import { connect } from "react-redux";
import { getBids, acceptBid } from "../actions/bidActions"
import BidCard from "../components/clientBidCard"
import clientLogo from "../images/bloomingdales.png"
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
  Form
} from "semantic-ui-react";
import logo from "../images/bid_buddy_logo_3.png";
import { push } from "connected-react-router";
import { pushToPage } from "../actions/scanner";

let categories = [
  { key: "Accessories", text: "Accessories", value: "Accessories" },
  { key: "Electronics", text: "Electronics", value: "Electronics" },
  { key: "Furniture", text: "Furniture", value: "Furniture" },
  { key: "Hardware", text: "Hardware", value: "Hardware" },
  { key: "Health & Beauty", text: "Health & Beauty", value: "Health & Beauty" },
  { key: "Home & Garden", text: "Home & Garden", value: "Home & Garden" },
  { key: "Luggage & Bags", text: "Luggage & Bags", value: "Luggage & Bags" },
  { key: "Women Shoes", text: "Women Shoes", value: "Womens Shoes" },
  { key: "Mens Shoes", text: "Mens Shoes", value: "Mens Shoes" },
  { key: "Kids Shoes", text: "Kids Shoes", value: "Kids Shoes" },
  { key: "Womens Clothing", text: "Womens Clothing", value: "Womens Clothing" },
  { key: "Mens Clothing", text: "Mens Clothing", value: "Mens Clothing" },
  { key: "Toys & Games", text: "Toys & Games", value: "Toys & Games" }
];

class addButton extends Component {

  render() {
    return (
      <Modal trigger={<Button color="dark blue">+</Button>} closeIcon>
        <Grid rows={2}>
          <Grid.Row>
            <Header
              as="h2"
              icon="hand point up"
              content="Accept bids automatically by setting custom thresholds below."
            />
          </Grid.Row>
          <Grid.Row>
            <Header as="h4">Set threshold by category</Header>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Dropdown
                placeholder="Categories"
                fluid
                multiple
                selection
                options={categories}
              />
            </Grid.Column>
            <Grid.Column>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Threshold (%)"
              >
                <input />
                <Label basic>%</Label>
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Header as="h4">Set threshold by brand name</Header>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Input placeholder="Enter Brand Name" />
            </Grid.Column>
            <Grid.Column>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Threshold (%)"
              >
                <input />
                <Label basic>%</Label>
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            {" "}
            <Header as="h4">Set threshold by volumne in stock</Header>{" "}
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Input placeholder="Enter Volume Amount" />
            </Grid.Column>
            <Grid.Column>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Threshold (%)"
              >
                <input />
                <Label basic>%</Label>
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Header as="h4">Set threshold by age of product in stock</Header>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Input placeholder="Age limit" />
            </Grid.Column>
            <Grid.Column>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Threshold (%)"
              >
                <input />
                <Label basic>%</Label>
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header as="h4">Set threshold by item number (UPC)</Header>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Input placeholder="Item Number" />
            </Grid.Column>
            <Grid.Column>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Threshold (%)"
              >
                <input />
                <Label basic>%</Label>
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button color="orange" primary>
              Set Thresholds
            </Button>
          </Grid.Row>
        </Grid>
      </Modal>
    );
  }
}

class ClientAccountPage extends Component {
  
  componentDidMount() {
    this.props.getBids()
}
productDashboardSummary = () => { 
  const totalDeclined = this.props.bids.filter(bid => bid.bidStatus === "declined").reduce((totalDeclined, bid) => {
    return totalDeclined + bid.listedPrice
  }, 0)
  const totalAccepted = this.props.bids.filter(bid => bid.bidStatus === "accepted").reduce((totalAccepted, bid) => {
    return totalAccepted + bid.listedPrice
  }, 0)
  const totalAcceptedBidPrice = this.props.bids.filter(bid => bid.bidStatus === "accepted").reduce((totalAccepted, bid) => {
    return totalAccepted + bid.bidPrice
  }, 0)
  const totalDeclinedBidPrice = this.props.bids.filter(bid => bid.bidStatus === "declined").reduce((totalDeclined, bid) => {
    return totalDeclined + bid.bidPrice
  }, 0)
  const varianceTotalDeclined = totalDeclined - totalDeclinedBidPrice
  const varianceTotalAccepted = totalAcceptedBidPrice - totalAccepted

  return (  
  <Segment>
      <Header as='h3'>Summary</Header>
      <Grid columns={2}>
          <Grid.Column>
              <Grid.Row>Total #of bids</Grid.Row>
              <Grid.Row>Total #of pending</Grid.Row>
          </Grid.Column>
          <Grid.Column>
              <Grid.Row>{this.props.bids.length}</Grid.Row>
              <Grid.Row>{this.props.bids.filter(bid => bid.bidStatus === "pending").length}</Grid.Row>
          </Grid.Column>
      </Grid>
      <Divider></Divider>
      <Grid columns={3}>
          <Grid.Column>
              <Grid.Row> Total Declined </Grid.Row>
              <Grid.Row>{totalDeclined}</Grid.Row>
              <Grid.Row>Total Accepted </Grid.Row>
              <Grid.Row>{totalAccepted}</Grid.Row>
          </Grid.Column>
          <Grid.Column>
              <Grid.Row>Bid value &#40;$&#41; </Grid.Row>
              <Grid.Row>{totalDeclinedBidPrice}</Grid.Row>
              <Grid.Row>Bid value &#40;$&#41; </Grid.Row>
              <Grid.Row>{totalAcceptedBidPrice}</Grid.Row>
          </Grid.Column>
          <Grid.Column>
              <Grid.Row>Variance &#40;+&#47;-&#41; </Grid.Row>
              <Grid.Row>{varianceTotalDeclined}</Grid.Row>
              <Grid.Row>Variance &#40;+&#47;-&#41; </Grid.Row>
              <Grid.Row>{varianceTotalAccepted}</Grid.Row>

          </Grid.Column>
  </Grid>
</Segment>
)
}
addButton = () => 
(<Modal trigger={<Segment textAlign='center'><Button color='dark blue' primary>ADD BID THRESHOLDS</Button></Segment>} closeIcon>
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
  render() {
    return (
      <React.Fragment>
        <div id="clientAccount-Container">
          {/* image div */}
          <div id="logo-div">
            <img
              class="accountLogos"
              src={clientLogo}
            />
            <h1 id="clientAccountPage-headerText"> Account Page </h1>
            <img id="accountLogos-Right" class="accountLogos" src={logo} />
          </div>
          {/* navbar div */}
          <div id="clientPageNav">
            <div>
              {/* <span>
                You have <strong>0</strong> bids unanswered.
              </span> */}
            </div>
            <div id="clientPageNav-buttons">
              <button>Profile</button>
              <button onClick={() => pushToPage("/clientLogin")}>Logout</button>
            </div>
          </div>
          {/* feed container div */}
          <div id="feedContainer">
            <div id="leftCol">
            <Header as='h1'>Product Dashboard</Header>
                {this.productDashboardSummary()}
                {this.addButton()}  
            </div>
            <div id="rightCol">
              {/* BID CARD: will append to the page */}
              {this.props.bids.map(bid => {
              return <BidCard 
              upc={bid.upc} 
              productImage={bid.productInfo.images[0]} 
              bidId={bid._id} bidStatus={bid.bidStatus} 
              productName={bid.productInfo.title} 
              bidPrice={bid.bidPrice} 
              price={bid.listedPrice} />
            })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      bids: state.bids.bids
  }
}

export default connect(mapStateToProps, {
  getBids,
  acceptBid,
  pushToPage
})(ClientAccountPage);
