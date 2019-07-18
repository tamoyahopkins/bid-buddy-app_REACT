
import React, {Component} from 'react'
import Modal from "./Modals"


//takes props: 1)itemUPC 2)itemName 3)itemDescription 4)itemImageURL

export default class Client_BIDCARD extends Component {
    state = {
        modal4: false
    }

    handleModal = () => {
        this.setState({
            modal4: !this.state.modal4
        })
    }


    modal4 = (productName, bidPrice, upc)=> (
        <Modal>
                <div className="modal">
                  <h2>BID ACCEPTED</h2>
                    <h3>Please scan the below voucher at the check-out register to apply the discount. Note: this voucher is viewable in your account page. 
                    </h3>
                    <div>Product Name: <span>{productName}</span></div>
                    <div>Bid Price Accepted: $<span>{bidPrice}</span></div>
                    <div>UPC: <span>{upc}</span></div>

                  <br></br>
                  <div id="sampleCoupon">
                    <img src="https://internationalbarcodes.com/wp-content/uploads/sites/95/2013/11/SSCC-Pallet-Barcode.jpg"/>
                  </div>
                  <button onClick={this.changeVoucherDetailsState}>Go Back</button>
                </div>
               
              </Modal>
      )
      

    render(){
        const showModal4 = this.state.modal4 ? this.modal4(this.props.productName, this.props.bidPrice, this.props.upc) : null
        return(
            <React.Fragment>
            <div>
                <div id="priceFeed-Component1">
                    <div className="voucherDiv-Container">
                        <img className="voucherDiv-image-left" src={this.props.productImage}/>
                        <div className="voucherDiv-info-middle">
                            <div><strong>Bid Status:</strong> <span>{this.props.bidStatus}</span></div>
                            <div><strong>Product name:</strong> <span>{this.props.productName}</span></div>
                            <div><strong>Bid price: $</strong><span>{this.props.bidPrice}</span></div>
                            <div><strong>Actual price: $ </strong><span>{this.props.price}</span></div>              
                        </div>
                        {this.props.bidStatus === 'accepted' && 
                            <button className="voucherDiv-button-right" onClick={this.handleModal}>
                                {showModal4}
                                Get Voucher
                            </button>
                        }
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
