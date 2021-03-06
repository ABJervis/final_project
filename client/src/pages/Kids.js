//this is the page for ADD KID

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import API from "../utils/API";
import { Input } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import SavedKids from "../components/SavedKids";


class Kids extends Component {
  state = {
    kids: [],
    name: "",
    age: "", 
    allergies: ""
  };

  componentDidMount() {
   this.loadKids();
    }

  loadKids = () => {
   API.getKids()
     .then(res =>
      this.setState({ 
      kids: res.data, name: "", age: "", allergies: ""})
     )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.kids && this.state.name) {
      API.saveKid({
        name: this.state.name,
        age: this.state.age,
        allergies: this.state.allergies
      })
      .then(res => this.loadKids())
      .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <div className= "title-container">
              <h1>Add Child</h1>
            </div>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Child's Name (required)"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="Age (required)"
                //this should actually be date of birth and should automatically update with the passing years
              />
              <Input
                value={this.state.allergies}
                onChange={this.handleInputChange}
                name="allergies"
                placeholder="Allergies (optional)"
              />
              <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Submit Child</Button>

            </form>
          </Col>
          <Col size="md-6 sm-12">
           
            <SavedKids />
              
          </Col>
        </Row>
        <Footer />
      </Container>
    );
    
  }
  
}

export default (Kids);

