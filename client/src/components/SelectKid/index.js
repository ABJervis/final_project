import React from "react";
import "./style.css";

//need the form to return the last recorded stats for the kid, then provide form to add new details about the appt

function SelectKid() {
    return (


    /*import React, { Component } from 'react';

class SelectKid extends Component {
  state = {
    test: true,
  }
  handleClick = () => {
    this.setState({
      test: !this.state.test
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        { this.state.test && <p>Conditional Rendering Is Cool!</p> }
      </div>
    );
  }
}
export default SelectKid;*/


    <div className="totalpage">    

        <div className="what-up">
            <h1>What's Up</h1>
        </div>
        
        <div className="container-fluid">
            <div className="form-group">
            <label for="childs-name-input">Child's Name</label>
            <input className="form-control" id="childs-name-input" placeholder="" type="text"></input>
            </div>
            <div className="form-group">
            <label for="age-input">Age</label>
            <input className="form-control" id="age-input" placeholder="" type="integer"></input>
            </div>
            <div className="form-group">
            <label for="height-input">Height</label>
            <input className="form-control" id="height-input" placeholder="" type="integer"></input>
            </div>
            <div className="form-group">
            <label for="weight-input">Weight</label>
            <input className="form-control" id="weight-input" placeholder="" type="integer"></input>
            </div>
            <div className="form-group">
            <label for="allergies-input">Allergies</label>
            <input className="form-control" id="allergies-input" placeholder="" type="text"></input>
            </div>
            <button className="btn btn-primary" id="add-train-btn">Submit</button>
        </div>
    </div>   
    );
  }

  export default SelectKid; 

  //put in path to make this the main page once logged in//
 
 