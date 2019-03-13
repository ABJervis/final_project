import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SavedAppt from "../components/SavedAppt";
import NewAppt from "../components/NewAppt";

class Details extends Component {
    state = {
    kids: {}
  };

  // When this component mounts, grab the kid with the _id of this.props.match.params.id
  // e.g. http://localhost:3000/kids/5c609ef543ca65cc9b068580

    componentDidMount() {
      API.getKid(this.props.match.params.id)
      .then(res => this.setState({ kids: res.data }))
      .catch(err => console.log(err));
    }
  
    render() {
      return (
        <Container fluid>
        <div className="kidname">
          <Row>
            <Col size="md-12">
              <h4>
              {this.state.kids.name} </h4>
              Allergies: {this.state.kids.allergies}    
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Link to="/kids">← Back to Kids</Link>
              
            </Col>
          </Row>
        </div>
        <NewAppt />
        <SavedAppt />
        
        </Container>
      );
    }
  }
  
  export default Details;

