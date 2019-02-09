//need the form to return the last recorded stats for the kid, then provide form to add new details about the appt

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });



class AddKid extends Component {
  state = {
    test: false,
  }
  handleClick = () => {
    this.setState({
      test: !this.state.test
    })
  }
  render() {
    return (
        <div className="totalpage">    
            
            <div>      
                <Button variant="contained" color="primary" onClick={this.handleClick}>Add Child</Button>
                { this.state.test && <div className="container-fluid">
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
                    <Button variant="contained" color="primary">Submit</Button>  
                    </div>
         
                }
            </div>
        </div>

    );
}

}

export default withStyles(styles)(AddKid);