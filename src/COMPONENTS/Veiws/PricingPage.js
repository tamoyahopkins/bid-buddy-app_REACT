
import React, {Component} from 'react'; 
import './PricingPage.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'
import logo from "../../images/bid_buddy_logo_3.png";
import handShake from "../../images/agreementMetIcon.png"


class PricingPage extends Component {
    render(){
        return(
          <div id="pricingPage-Container">
            <img id='pricingPageLogo'src={logo}/> 
            <h2 id="pricingPage-Header">LOWEST PRICE: </h2>
            <h2 id="lowestPriceDiv">$0</h2>    
            <h2 id='pricingPage-Header-2'>AVAILABLE AT BELOW STORES: </h2>       
            {/* pricefeed div */}
            <div id="priceFeed-Container">
              <div id="storeInfoDiv-left"><span>1.</span></div>
              <div id="storeInfoDiv-middle"><span>Walmart</span></div>
              <div id="storeInfoDiv-middle"><span>$0.00</span></div>
              <button id="storeInfoDiv-right"><img id="bidButtonImage" src={handShake}/></button>
            </div>

            <button id="scanNewItemButton">Scan Another Item</button>    
        </div>




            //Andrew: code
            // <Grid centered rows>
            //     <Grid.Row> <Form.Input type="text" placeholder="Search.."/>

            //     </Grid.Row>
                
            //     <Grid.Row columns={3}>
            //         <Grid.Column width={1}></Grid.Column>
            //         <Grid.Column width={13}></Grid.Column>
            //         <Grid.Column width={2}></Grid.Column>
            //     </Grid.Row>
            //     <Grid.Row>

            //     </Grid.Row>
            //     <Grid.Row columns={3}>
            //         <Grid.Column width={1}></Grid.Column>
            //         <Grid.Column width={13}></Grid.Column>
            //         <Grid.Column width={2}></Grid.Column>
            //     </Grid.Row>
            //     <Grid.Row></Grid.Row>
            //     <Grid.Row columns={3}>
            //         <Grid.Column width={1}></Grid.Column>
            //         <Grid.Column width={13}></Grid.Column>
            //         <Grid.Column width={2}></Grid.Column>
            //     </Grid.Row>
            //     </Grid> 
        )
    }
}


export default PricingPage;
