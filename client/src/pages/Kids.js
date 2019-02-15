//need the form to return the last recorded stats for the kid, then provide form to add new details about the appt

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import API from "../utils/API";
import { Input, TextArea } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import SavedKids from "../pages/SavedKids";



const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });


class Kids extends Component {
  state = {
    test: false,
    kids: [],
    name: "",
    age: "",
    height: "",
    weight: "",
    allergies: "",
  }

  componentDidMount() {
   this.loadKids();
    }

  loadKids = () => {
   API.getKids()
     .then(res =>
      this.setState({ kids: res.data, name: "", age: "", height: "", weight: "", allergies: ""})
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
        height: this.state.height, 
        weight: this.state.weight,
        allergies: this.state.allergies
      })
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
              />
              <Input
                value={this.state.height}
                onChange={this.handleInputChange}
                name="height"
                placeholder="Height (optional)"
              />
               <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight (optional)"
              />
               <TextArea
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

export default withStyles(styles)(Kids);