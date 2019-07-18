import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "../components/Scanner"
import { getUpc } from "../actions/scanner"
import logo from "../images/bid_buddy_logo_3.png";
import 'semantic-ui-css/semantic.min.css'
import Product from "../components/Product"
import { processBarcode } from "../actions/scanner"
 import { Button, Header } from 'semantic-ui-react'
 import Nav from './PricingPage_NAV'
 import {getBids} from "../actions/bidActions"
import Voucher from "../components/voucherBidCard"



class VoucherPage extends Component {
  state = { 
    text: ""
  }

 componentDidMount() {
      this.props.getBids()

  }

  constructor(props){
      super(props);
      // this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }


  // handle text change in input
  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.process({ text: this.state.text })
    this.setState({ text: "" })
    document.getElementById("scanPageInput").value = "";
    console.log("test")
  };

    render() { 
        return (
        <div id="scanPage-Container">
          <Nav></Nav>
          <img alt="logo" id='scanPageLogo' src={logo}/> 
          <Header as='h2'> Voucher List </Header>
          {this.props.bids.map(bid => {

          return <Voucher upc={bid.upc} productImage={bid.productInfo.images[0]} bidId={bid._id} bidStatus={bid.bidStatus} productName={bid.productInfo.title} bidPrice={bid.bidPrice} price={bid.listedPrice} />
          })}
        </div>
    )
        
      
    }
}

const mapStateToProps = (state) => {
    return {
        bids: state.bids.bids
    }
}


export default connect(mapStateToProps, {
    getBids
})(VoucherPage);

