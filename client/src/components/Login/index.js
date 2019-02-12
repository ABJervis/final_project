import React, { Component } from "react";
import Footer from "../Footer";
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


class Login extends Component {
//set the initial state
    state = {
        userName: "",
        password: ""
    };

    handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;
    
    if (name === "password") {
        value = value.substring(0, 10);
    }
    //update the state
    this.setState({
        [name]: value
    });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.userName || !this.state.password) {
            alert("Please enter username & password");
        }
        else if (this.state.userName === "ashley" && this.state.passwork === "456") {
            alert("Welcome Back!");
            window.location = "/kids"
        } else {
            alert ("Your username or password was incorrect. Please try again.")
        }

        this.setState({
            userName: "",
            password: ""
        });
    };

    render() {
        return(
        <div className="container-login">
        <p>
            Please enter your username and password.
        </p>
        <form className="form">
          <input id="username"
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
            />
            <input id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}  
            type="password"
            placeholder="Password"
            />

            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>
            Submit
            </Button>
        </form>
        
        <Footer />

        </div>
    );
    };
}

export default withStyles(styles)(Login);


