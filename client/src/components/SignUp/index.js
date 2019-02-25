import React, { Component } from "react";
import axios from "axios";
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
        emailAdd: "",
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

    const welcome = () => {
        window.location = "/kids"
    }    
    
        const {email, password} = this.state
        console.log(email, password)

        if (!this.state.emailAdd || !this.state.password) {
            alert("Please enter email & password");
        } else if (!this.state.emailAdd) {
            alert ("Please enter your email address");
        } else if (!this.state.password) {
            alert ("Please enter your password");
        }
        else {
            axios.post("api/users", {
                emailAdd: this.state.emailAdd,
                password: this.state.password
            }).then(function (response) {
                console.log(response);

                welcome();

                //AXIOS GET HERE
                //axios.get("api/users/${this.userName")

                this.setState({
                    emailAdd: "",
                    password: ""
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    };

    render() {
        return(
        <div className="container-signup">
        <h4>
            <strong>Sign Up</strong>
        </h4>
        <form className="form">
          <input id="emailAdd"
            value={this.state.emailAdd}
            name="emailAdd"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
            />
            <br />
            <input id="emailConfirmAdd"
            value={this.state.emailConfirmAdd}
            name="emailConfirmAdd"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Confirm Email Address"
            />
            <br />
            <input id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}  
            type="password"
            placeholder="Password"
            />
            <br />
            <input id="confirmPassword"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}  
            type="confirmPassword"
            placeholder="Confirm Password"
            />
            <br />
            <br />

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
