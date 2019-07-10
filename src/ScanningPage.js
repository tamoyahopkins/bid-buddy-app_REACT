import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'
import "./App.css";


class ScanningPage extends Component {
  render() {
      return(
    <Grid centered rows={3}>
      <Grid.Row >        
        <Form.Input type="text"/>       
      </Grid.Row>
      <Grid.Row>
      <t>Type in the UPC code for an item</t>
      </Grid.Row>
       
      <div name="Camera">
          <Grid.Row>
          
          </Grid.Row>

      </div>
      
    </Grid>
      );
  }
}
export default ScanningPage;
//test