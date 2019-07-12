import React, { Component, Fragment } from 'react'
//import './Product.css'
class Product extends Component {
  render() {
    return (
      <Fragment>
        <div>
        {/* <button 
          onClick={this.props.click ? this.props.click : this.props.view}
          className="btn btn-secondary btn-md btn-block btn-scan-again">{this.props.click ? 'Scan Again' : 'View History' }</button> */}
        {/* {console.log(this.props.item.upc)} */}
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Barcode Number</td>
              <td>{this.props.upc}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>{this.props.title}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{this.props.brand}</td>
            </tr>
            <tr>
              <td>Product Image</td>
              <td><img src={this.props.image} /></td>
            </tr>
            <tr>
              <td>Lowest Price</td>
              <td>{this.props.lowest_recorded_price}</td>
            </tr>
            <tr>
              <td>Highest Price</td>
              <td>{this.props.highest_recorded_price}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{this.props.description}</td>
            </tr>
          </tbody>
        </table> 
        </div>
      </Fragment>
    )
  }
}

// upc: parsedRes.items[0].upc,
//       name: parsedRes.items[0].title,
//       brand : parsedRes.items[0].brand,
//       lowest_recorded_price: parsedRes.items[0].lowest_recorded_price,
//       highest_recorded_price: parsedRes.items[0].highest_recorded_price,
export default Product