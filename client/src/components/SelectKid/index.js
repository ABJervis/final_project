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



class SelectKid extends Component {
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
                <Button variant="contained" color="primary" onClick={this.handleClick}>Select Child</Button>
                { this.state.test && <div className="container-fluid">
                    <div className="form-group">
                    <label for="childs-name-input">Child's Name</label>
                    <input className="form-control" id="childs-name-input" placeholder="" type="text"></input>
                    </div>
                    <Button variant="contained" color="primary">Submit</Button>  
                    </div>
         
                }
            </div>
        </div>

    );
}

}

export default withStyles(styles)(SelectKid);

  //put in path to make this the main page once logged in//
 
 