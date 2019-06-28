
import React, {Component} from 'react'; 
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image, Form } from 'semantic-ui-react'

class PricingPage extends Component {
    render(){
        return(
            <Grid>
                <Grid.Row> <Form.Input type="text" placeholder="Search.."/>

                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
                </Grid> 
        )
    }
}


export default PricingPage;
