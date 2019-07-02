
import React, {Component} from 'react'; 
import './PricingPage.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'

class PricingPage extends Component {
    render(){
        return(
            <Grid centered rows>
                <Grid.Row> <Form.Input type="text" placeholder="Search.."/>

                </Grid.Row>
                
                <Grid.Row columns={3}>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={13}></Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={13}></Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={13}></Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                </Grid> 
        )
    }
}


export default PricingPage;
