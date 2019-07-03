import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "../Scanner"
import {processBarcode} from "../../actions/scanner"
import logo from "../../images/bid_buddy_logo_3.png";
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'



class Home extends Component {
  constructor(props){
      super(props);
      this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
  }


  _onBarcodeDetect(barcode) {
      this.props.process(barcode)
  }

    render() { 
        return (
        <div id="scanPage-Container">
          <img id='scanPageLogo' src={logo}/>        
          <div>
            <input id='scanPageInput'type="text" placeholder="Insert product name or UPC number"/>     
          </div>
          <div id="scannerDiv">
            <Scanner onBarcodeDetect={this._onBarcodeDetect} />
          </div>
        </div> 
      ) 
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      process: (barcode) => { dispatch(processBarcode(barcode)) }
    }
  }
export default connect(null, mapDispatchToProps)(Home);
