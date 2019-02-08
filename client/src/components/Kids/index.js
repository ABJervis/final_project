import React from "react";
import Footer from "../Footer";
import "./style.css";


function Kids() {
    return (
        
        <div className="container-fluid">
            <div className="form-group">
            <label for="train-name-input">Train Name</label>
            <input className="form-control" id="train-name-input" placeholder="" type="text"></input>
            </div>
            <div className="form-group">
            <label for="destination-input">Destination</label>
            <input className="form-control" id="destination-input" placeholder="" type="text"></input>
            </div>
            <div className="form-group">
            <label for="time-input">First Train Time(HH:mm - military time)</label>
            <input className="form-control" id="time-input" placeholder="" type="text"></input>
            </div>
            <div className="form-group">
            <label for="frequency-input">Frequency (min)</label>
            <input className="form-control" id="frequency-input" placeholder="" type="text"></input>
            </div>
            <button className="btn btn-primary" id="add-train-btn">Submit</button>
        </div>
        
    );
  }

  export default Kids; 
 
 