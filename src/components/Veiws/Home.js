import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "../Scanner"
import processBarcode from "../../actions/scanner"


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
            <div>
                Bid Buddies
                <Scanner onBarcodeDetect={this._onBarcodeDetect} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      process: (barcode) => { dispatch(processBarcode(barcode)) }
    }
  }
export default connect(null, mapDispatchToProps)(Home);