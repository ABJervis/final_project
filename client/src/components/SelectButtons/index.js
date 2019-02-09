import React from "react";
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

function SelectButtons (props) {
  const { classes } = props;
  return (
     
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Select Child
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Add Child
      </Button>
    
    </div> 
  );
}

SelectButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectButtons);
            