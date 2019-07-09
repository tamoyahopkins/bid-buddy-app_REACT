
import React, {Component} from 'react'; 
import './PricingPage.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'
import logo from "../../images/bid_buddy_logo_3.png";
import handShake from "../../images/agreementMetIcon.png"

const ReactDOM = require('react-dom'); 
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {modalRoot.appendChild(this.el);}
  componentWillUnmount() {modalRoot.removeChild(this.el);}
  render() {
     return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class PricingPage extends Component {
    state = {showModal: false};
  

  handleShow = ()=> {
    this.setState({showModal: true });
  }
  handleClose = ()=> {
    let newShowModal = !this.state.showModal
    this.setState({showModal: newShowModal }); 
  }
  
  // handleHide = () => {this.setState({showModal: false});
  // }

    render(){
      const modal = this.state.showModal ? (
        <Modal>
          <div className="modal">
            <img class="modal_clientLogo" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg" ></img>
            <div class="modal_userForm">
              <form onSubmit={this.handleClose} id="modal_Form">
                <label>Listed Price: </label>
                <input></input>
                <label>Enter Bid Amount:</label>
                <input></input>
                
                <h3>Payment Details</h3>
                <label>Payee Name:</label>
                <input></input>
                <label>Card Number:</label>
                <input></input>
                <label>Expiration Date:</label>
                <input></input>
                <label>CBD:</label>
                <input></input>
                <hr></hr>
                <button type="submit">Confirm Bid!</button>
              </form>
            </div>
          </div>
        </Modal>
      ) : null;
      
        return(
          <div id="pricingPage-Container">
            <img id='pricingPageLogo'src={logo}/> 
            <h2 id="pricingPage-Header">LOWEST PRICE: </h2>
            <h2 id="lowestPriceDiv">$0</h2>    
            <h2 id='pricingPage-Header-2'>AVAILABLE AT BELOW STORES: </h2>       
            {/* pricefeed div */}
            <div id="priceFeed-Container">
              <div id="storeInfoDiv-left"><span>1.</span></div>
              <div id="storeInfoDiv-middle"><span id="storeName">TJ Maxx </span></div>
              <div id="storeInfoDiv-middle2"><span id="storePrice">$0</span></div>
              <button onClick={this.handleShow} id="storeInfoDiv-right"><img id="bidButtonImage" src={handShake}/> {modal}</button>
            </div>
            <div id="priceFeed-Container">
              <div id="storeInfoDiv-left"><span>2.</span></div>
              <div id="storeInfoDiv-middle"><span id="storeName">Walmart </span></div>
              <div id="storeInfoDiv-middle2"><span id="storePrice">$00,000.00</span></div>
              <button id="storeInfoDiv-right"><img id="bidButtonImage" src={handShake}/></button>
            </div>
            <div id="priceFeed-Container">
              <div id="storeInfoDiv-left"><span>3.</span></div>
              <div id="storeInfoDiv-middle"><span id="storeName">Walmart </span></div>
              <div id="storeInfoDiv-middle2"><span id="storePrice">$00,000.00</span></div>
              <button id="storeInfoDiv-right"><img id="bidButtonImage" src={handShake}/></button>
            </div>
            {/* BidButton */}
            

            <button id="scanNewItemButton"><bold>Scan Another Item</bold></button>    
        </div>



        )
    }
}


export default PricingPage;
// ReactDOM.render(<PricingPage />, appRoot);
