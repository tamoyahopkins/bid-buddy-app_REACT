import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "../Scanner"
import { getUpc } from "../../actions/scanner"
import logo from "../../images/bid_buddy_logo_3.png";
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form, Button } from 'semantic-ui-react'
import { throws } from "assert";



class Home extends Component {
  state = { 
    text: ""
  }

  constructor(props){
      super(props);
      // this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }


  // _onBarcodeDetect(barcode) {
  //     this.props.process(barcode)
  // }

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
            <Scanner onBarcodeDetect={this._onBarcodeDetect} />
          </div>
          <div>{this.props.productScanned}</div>
        </div>
      ) 
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    productScanned: state.scanned.productScanned,
    scan: state.scanned.startScanning,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      process: (barcode) => { dispatch(getUpc(barcode)) }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Home);

//test
