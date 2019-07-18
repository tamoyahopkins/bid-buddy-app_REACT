import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "../components/Scanner"
import { getUpc } from "../actions/scanner"
import logo from "../images/bid_buddy_logo_3.png";
import 'semantic-ui-css/semantic.min.css'
import Product from "../components/Product"
import { processBarcode } from "../actions/scanner"
 import { Button } from 'semantic-ui-react'
 import Nav from './PricingPage_NAV'



class Home extends Component {
  state = { 
    text: ""
  }

  constructor(props){
      super(props);
      // this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.onBarcodeDetect = this.onBarcodeDetect.bind(this)
  }


  onBarcodeDetect(barcode) {
      this.props.process(barcode)
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
      const { text } =  this.state;

        return (
        <div id="scanPage-Container">
          <Nav></Nav>
          <img alt="logo" id='scanPageLogo' src={logo}/>        
          <div>
            <input 
            id='scanPageInput'
            type="text" 
            placeholder="Insert product name or UPC number"
            onChange={this.handleChange}
            />     
          </div>
          <Button
          onClick = {this.handleSubmit}
          ></Button>
          
          <div id="scannerDiv">
            <Scanner onBarcodeDetect={this.onBarcodeDetect} />
          </div>
        </div>
      ) 
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    productScanned: state.scanned.productScanned,
    scan: state.scanned.startScanning,
    invalid: state.scanned.invalidBarcode,
    noApi: state.scanned.noApi
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      process: (barcode) => { dispatch(getUpc(barcode)) }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);

