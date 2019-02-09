import React from "react";
import "./style.css";


function AddKid() {
    return (
        
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
        
    );
  }

  export default AddKid;