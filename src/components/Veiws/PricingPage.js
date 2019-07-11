
import React, {Component} from 'react'; 
import './PricingPage.css';
import 'semantic-ui-css/semantic.min.css'
// import { Grid, Image, Form, Container } from 'semantic-ui-react'
import logo from "../../images/bid_buddy_logo_3.png";
import handShake from "../../images/agreementMetIcon.png"
import { formatWithOptions } from 'util';

const ReactDOM = require('react-dom'); 
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = "modalContainer"
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
    state = {
      Modal: false,
      Modal1: false, 
      Modal2: false, 
      Modal3: false
    };
  
  showModal = ()=> {
    // let showModal = !this.state.Modal
    this.setState({
      Modal: true,
      Modal1: this.state.Modal1, 
      Modal2: this.state.Modal2, 
      Modal3: this.state.Modal3  
     });
  }
  handleBid = ()=> {
    let hideModal= !this.state.Modal
    let showModal1 = !this.state.Modal1
    this.setState({
      Modal: hideModal,
      Modal1: showModal1, 
      Modal2: this.state.Modal2,
      Modal3: this.state.Modal3
    })
    console.log("You clicked the confirm bid button:", this.state)
    // this.showCorrectModal()
 
  }
  closeModal1 = () => {
    console.log("state before modal button resets state", this)
    // let closeModal1 = false
    // let closeModal = !this.state.Modal
    this.setState({
      Modal: !this.state.Modal,
      Modal1: false, 
      Modal2: this.state.Modal2, 
      Modal3: this.state.Modal3
    },()=> console.log("closing modal 1", this.state)); 
    // console.log("closing modal 1", this.state)
  }
  showCorrectModal = () => {
    console.log("state passed to Modal1", this.state)
    let randomNumber = Math.floor(Math.random()*10)
  
    if (randomNumber < 3) {
      let closeModal= !this.state.Modal
      let showModal3 = !this.state.Modal3
      this.setState({
        Modal: closeModal,
        Modal1: this.state.Modal1, 
        Modal2: this.state.Modal2, 
        Modal3: showModal3
      })
      // console.log("picked showModal3", this.state)
    }
    else if (randomNumber % 2) {
      let closeModal= !this.state.Modal
      let showModal1 = !this.state.Modal1
      this.setState({
        Modal: closeModal,
        Modal1: showModal1,
        Modal2: this.state.Modal2, 
        Modal3: this.state.Modal3
      })
      console.log("pickeed showmodal1: changed modal state to false, modal1 state to true", this.state)
    }
    else if (randomNumber % 3) {
      let closeModal= !this.state.Modal
      let showModal2 = !this.state.Modal2
      this.setState({
        Modal: closeModal,
        Modal1: this.state.Modal1, 
        Modal2: showModal2, 
        Modal3: this.state.Modal3
      })
      
      console.log("picked showModal2", this.state)
    }
  }
//modal = showsCorrectModal
  modal = (
    <Modal>
    <div className="modal">
      <img className="modal_clientLogo" src="https://s3-media4.fl.yelpcdn.com/bphoto/KImy2lcnme23Q8jeUQ7s_A/ls.jpg" ></img>
      <div className="modal_userForm">
        <form onSubmit={this.handleBid} id="modal_Form">
          <label>Listed Price: </label>
          <input></input>
          <label>Enter Bid Amount:</label>
          <input></input>
          
          <br></br>
          <label><strong>Payment Details</strong></label>
          <br></br>
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
  )
  modal1 = (
      <Modal>
        
          <div className="modal">
            <h2>BID ACCEPTED</h2>
              <h3>Please scan the below voucher at the check-out register to apply the discount. Note: this voucher is viewable in your account page. 
              </h3>
            <div id="sampleCoupon">
              <img src="https://internationalbarcodes.com/wp-content/uploads/sites/95/2013/11/SSCC-Pallet-Barcode.jpg"/>
            </div>
            <button onClick={this.closeModal1} type="submit">Go Back</button>
          </div>
         
        </Modal>
    )
  
  modal2 = (
    <Modal>
      <form>
        <div className="modal">
          <h2>OFFER PENDING...</h2>
          <h3>This store will be let you know if your bid was accepted within 24 hours. 
            <br></br>
          Be sure to check your BID BUDDY account page for updates.
          </h3>
          <button type="submit">Close</button>
        </div>
        </form>
      </Modal>
  )

  modal3 = (
    <Modal>
      <form>
          <div className="modal">
            <h2>OFFER DECLINED.</h2>
            <h3>Please bid again.</h3>
            <button type="submit">Close</button>
          </div>
        </form>
      </Modal>
  )
  
    render(){
      const modal = this.state.Modal ? this.modal : null;
      const modal1 = this.state.Modal1 ? this.modal1 : null; 
      const modal2 = this.state.Modal2 ? this.modal2 : null;
      const modal3 = this.state.Modal3 ? this.modal3 : null; 

      
        return(
          <div id="pricingPage-Container">
            <img id='pricingPageLogo'src={logo}/> 
            <h2 id="pricingPage-Header">LOWEST PRICE: </h2>
            <h2 id="lowestPriceDiv">$0</h2>    
            <h2 id='pricingPage-Header-2'>AVAILABLE AT BELOW STORES: </h2>       
            {/* pricefeed div code below */}
            <div id="priceFeed-Container">
              <div id="storeInfoDiv-left"><span>1.</span></div>
              <div id="storeInfoDiv-middle"><span id="storeName">TJ Maxx </span></div>
              <div id="storeInfoDiv-middle2"><span id="storePrice">$0</span></div>
              <button onClick={this.showModal} id="storeInfoDiv-right">
                <img id="bidButtonImage" src={handShake}/> 
              </button>
                {modal}
                {modal1}
                {modal2}
                {modal3}
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
            {/* BidButton code below */}
            

            <button id="scanNewItemButton"><strong>Scan another item</strong></button>    
        </div>



        )
    }
}


export default PricingPage;
// ReactDOM.render(<PricingPage />, appRoot);
