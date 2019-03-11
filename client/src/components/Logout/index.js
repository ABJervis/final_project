import React, { Component } from "react";

class Logout extends Component {

    state = {
        emailAdd: "",
        password: ""
    };

    handleInputChange = event => {

    let value = event.target.value;
    const name = event.target.name;

    this.setState({
    [name]: value
    });
    };


    handleFormSubmit = event => {
        event.preventDefault();

    const logout = () => {
        window.location = "/"

    (this.state.emailAdd || this.state.password) 
        alert("just an alert");
        
        logout();    

    }
    };

    
    

    render() {
        return(
        <div className="container-logout">
        <Button variant="outline-primary" onClick={this.handleFormSubmit}>Logout</Button>
        </div>
        );
    };
}

export default Logout;