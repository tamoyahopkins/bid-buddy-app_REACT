
import React, {Component} from 'react'

//takes props: 1)itemUPC 2)itemName 3)itemDescription 4)itemImageURL

export default class Client_BIDCARD extends Component {
    render(){
        return(
            <React.Fragment>
                <img className="voucherDiv-image-left" src={this.productImage}/>
                <div className="voucherDiv-info-middle">
                  <div><strong>Product name:</strong> <span>Insert product name</span></div>
                  <div><strong>Bid price: </strong><span>Insert price</span></div>
                  <div><strong>Actual price: </strong><span>Insert price</span></div>              
                </div>
            </React.Fragment>
        )
    }
}
