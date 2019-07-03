import React, {Component} from 'react'

//takes props: 1)itemUPC 2)itemName 3)itemDescription 4)itemImageURL

export default class Client_BIDCARD extends Component {
    render(){
        return(
            <React.Fragment>
                {/* BID CARD: will append to the page */}
                <div id="bidCard-Container">
                    <img id="bidCard-section-left" class="bidCard-section" src={this.props.itemImageURL}></img>
                    <div id="bidCard-section-middle" class="bidCard-section">
                        <label><strong>Item ID:</strong> <text>{this.props.itemUPC}</text></label>
                        <br></br>
                        <label><strong>Item Name: </strong><text>{this.props.itemName}</text></label>
                        <br></br>
                        <label><strong>Description: </strong><text>{this.props.itemDescription}</text></label>
                    </div>
                    <div id="bidCard-section-right" class="bidCard-section">
                        <button class="bidResponseButton">Accept</button>
                        <button class="bidResponseButton">Decline</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}