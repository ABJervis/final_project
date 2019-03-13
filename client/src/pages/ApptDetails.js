//this page will grab the information to a specific appointment

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


class ApptDetails extends Component {
    state = {
    appointment: {}
  };

  // When this component mounts, grab the appointment with the _id of this.props.match.params.id

    componentDidMount() {
      API.getAppointment(this.props.match.params.id)
      .then(res => this.setState({ appointment: res.data }))
      .catch(err => console.log(err));
    }
  
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <h5>
                Date: {this.state.appointment.date}  
                <br />
                Reason for Visit: {this.state.appointment.visit} 
                <br />
                Height: {this.state.appointment.height}
                <br />
                Weight: {this.state.appointment.weight}
                <br />
                Diagnosis: {this.state.appointment.diagnosis}
                <br />
                Medication: {this.state.appointment.medication}
                <br />
                Notes: {this.state.appointment.notes}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
            <Link to="/kids/ + kids.id">← Back to Appointments</Link>
            </Col>
          </Row>
        </Container>
  
        
      );
    }
  }
  
  export default ApptDetails;