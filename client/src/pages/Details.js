import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SavedAppt from "../components/SavedAppt";

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
          <Row>
            <Col size="md-12">
                  <h4>
                  {this.state.kids.name} 
                    <br />
                  </h4>
                  <h5>
                    Age: {this.state.kids.age}
                    <br />
                    Allergies: {this.state.kids.allergies}
                  </h5>
          
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/kids">← Back to Kids</Link>
            </Col>
          </Row>
        
        <SavedAppt />
        </Container>
        

  
        
      );
    }
  }
  
  export default Details;


/*  <Row>
  <Col size="md-10 md-offset-1">
    
      <Link to="/NewAppt">Add New Appointment Details</Link>
      <br />
      <Link to="/PrevAppt">View Previous Appointment Details</Link>
   
  </Col>
</Row>*/