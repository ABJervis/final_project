//need the form to return the last recorded stats for the kid, then provide form to add new details about the appt

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Col, Row, Container } from "../Grid";


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });



class AddKid extends Component {
  state = {
    test: false,
    child_name: [],
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
        this.setState({ child_name: res.data, age: "", height: "", weight: "", allergies: ""})
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
    if (this.state.child_name && this.state.age) {
      API.saveKid({
        child_name: this.state.child_name,
        age: this.state.age,
        height: this.state.height, 
        weight: this.state.weight,
        allergies: this.state.allergies
      })
        .then(res => this.loadKids())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <div className= "title-container">
              <h1>Select Child</h1>
            </div>
            <form>
              <Input
                value={this.state.child_name}
                onChange={this.handleInputChange}
                name="child_name"
                placeholder="Child's Name(required)"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="Age (required)"
              />
              <TextArea
                value={this.state.height}
                onChange={this.handleInputChange}
                name="height"
                placeholder="Height (required)"
              />
               <TextArea
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight (required)"
              />
               <TextArea
                value={this.state.allergies}
                onChange={this.handleInputChange}
                name="allergies"
                placeholder="Allergies (optional)"
              />
              <FormBtn
                disabled={!(this.state.age && this.state.child_name)}
                onClick={this.handleFormSubmit}
              >
                Submit Child
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <div className="result-container">
              <h1>Children</h1>
            </div>
            {this.state.child_name.length ? (
              <List>
                {this.state.child_name.map(kid => (
                  <ListItem key={kid._id}>
                    <Link to={"/selectkid" + kid._id}>
                      <strong>
                        {kid.child_name}, {kid.age}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteKid(kid._id)} />
                  </ListItem>

                ))}
              </List>
            ) : (
              <h3>Huh?</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withStyles(styles)(AddKid);