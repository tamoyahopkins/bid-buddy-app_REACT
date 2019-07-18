import React, {Component} from 'react'
import { acceptBid } from "../actions/bidActions"
import { connect } from "react-redux"
//takes props: 1)itemUPC 2)itemName 3)itemDescription 4)itemImageURL

class Client_BIDCARD extends Component {
    
    handleAcceptBid = (bid, acceptedObj) => (e) => {
        this.props.acceptBid(bid, acceptedObj)

    }
    render(){

        return(
            <React.Fragment>
                {/* BID CARD: will append to the page */}
                <div id="bidCard-Container">
                    <img id="bidCard-section-left" class="bidCard-section" src={this.props.productImage}></img>
                    <div id="bidCard-section-middle" class="bidCard-section">
                        <label><strong>Item ID:</strong> <text>{this.props.upc}</text></label>
                        
                        <br></br>
                        <label><strong>Item Name: </strong><text>{this.props.productName}</text></label>
                        <br></br>
                        <label><strong>Bid Offer: </strong><text>{this.props.bidPrice}</text></label>
                        {/* <label><strong>Bid Id: </strong><text>{this.bid._id}</text></label> */}
                        <br></br>
                        <label><strong>Description: </strong><text>{this.props.description}</text></label>
                    </div>
                    <div id="bidCard-section-right" class="bidCard-section">
                        {this.props.bidStatus === "pending" ? 
                        (<React.Fragment><button 
                        onClick={this.handleAcceptBid(this.props.bidId, {
                            accepted: true
                        })}
                        class="bidResponseButton">Accept</button>
                       
                        <button 
                        onClick={this.handleAcceptBid(this.props.bidId, {
                            accepted: false
                        })}
                        class="bidResponseButton">Decline</button>
                        </React.Fragment>)
                        : <p>{this.props.bidStatus}</p>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, { 
    acceptBid
})(Client_BIDCARD)
