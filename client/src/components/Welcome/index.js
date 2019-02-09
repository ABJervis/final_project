import React from "react";
import SelectButtons from "../SelectButtons";
import SelectKid from "../SelectKid";
import AddKid from "../AddKid";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


function Welcome() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (

    <div className="container-fluid">

      <div className="WelcomePage">
        <h3>Hello There!</h3>
        <br />
        Let's get going. Using the buttons below you can either select an existing child's profile or create a new profile for an additional child.
      </div>    
      <br />
      <SelectKid />
      <br />
      <AddKid />
    </div>




    

  );
}

export default Welcome;
            
            












//once logged in welcome page becomes main page and offers options for add kid and select kid
//to do this we need to conditionally render the page based on response, select kid or add kid

/*function Welcome () {

function SelectKid(props) {
    return ("../SelectKid");
}

function AddKid(props) {
  return ("../AddKid");
}

function Kid(props) {
  const isSelected = props.isSelected;
  if (isSelected) {
    return <SelectKid />;
  }
  return <AddKid />;
}


function SelectKidButton(props) {
  return (
    <button onClick={props.onClick}>
      Select Child
    </button>
  );
}

function AddKidButton(props) {
  return (
    <button onClick={props.onClick}>
      Add Child
    </button>
  );
}

class ChoiceControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectClick = this.handleSelectClick.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {isSelected: false};
  }

  handleLoginClick() {
    this.setState({isSelected: true});
  }

  handleLogoutClick() {
    this.setState({isSelected: false});
  }

  render() {
    const isSelected = this.state.isSelected;
    let button;

    if (isSelected) {
      button = <AddKidButton onClick={this.handleAddClick} />;
    } else {
      button = <SelectKidButton onClick={this.handleSelectClick} />;
    }

    return (
      <div>
        <Kid isSelected={isSelected} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <ChoiceControl />,
  document.getElementById('root')
);

}

export default Welcome;*/