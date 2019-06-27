import React, { Component } from "react";
import { connect } from "react-redux";
import Scanner from "./Scanner"

class Home extends Component {
  
    render() { 
        return (  
            <div>
                Bid Buddies
                <Scanner />
            </div>
        );
    }
}
 
export default Home;