import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import { Form, FormControl, Button } from 'react-bootstrap';


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
        <Form inline>
        <FormControl 
            value={this.state.emailAdd}
            onChange={this.handleInputChange}
            name="emailAdd"
            placeholder="Email Address" 
            className="mr-sm-2" />
        <FormControl 
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password" 
            className="mr-sm-2" />
        <Button variant="outline-primary" onClick={this.handleFormSubmit}>Login</Button>
        </Form> 
      
        <Footer />
        </div>
    );
    };
}

export default Login;
