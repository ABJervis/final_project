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
        alert("Welcome Back");
        window.location = "/kids"
    }    
    
        const {emailAdd, password} = this.state
        console.log(emailAdd, password)

        if (!this.state.emailAdd || !this.state.password) {
            alert("Please enter an Email Address & Password");
        }
        else {
            axios.post("api/users", {
                userName: this.state.emailAdd,
                password: this.state.password
            }).then(function (response) {
                console.log(response);

                welcome();

                //Need to store users in the users database, resulting CHILD data has to match user's profile
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
        <div className="container-login">
        <p>
            Please enter your email address and password.
        </p>
        <form className="form">
          <input id="emailAdd"
            value={this.state.emailAdd}
            name="emailAdd"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email Address"
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


