import React, { Component } from 'react';
import { render } from "react-dom";
import style from "@material-ui/core/"
import Theme from "./Theme/Theme"

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        const mystyle = 
          {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <React.Fragment>                
                <Theme />
            </React.Fragment>
        )
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
