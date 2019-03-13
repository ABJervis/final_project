import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";

class SavedAppt extends Component {
  state = {
    appointment: [],
  };

  componentDidMount() {
    this.getSavedAppts();
  }
  
  getSavedAppts = () => {
    API.getAppointments()
      .then(res => 
        this.setState({
        appointment: res.data
      })
    )
    .catch(err => console.log(err));
  };

  handleSelectAppt = id => {
    API.getAppointment(id).then(res => this.getAppointments());
  };

  render() {
    return (
      <Container fluid>
      <div className="savedappt">
        <Row>
          <Col size="md-6">
              <h4 className="text-center">
                Previous Appointments
              </h4>
         
              {this.state.appointment.length ? (
                <List>
                  {this.state.appointment.map(appointment => (
                    <ListItem key={appointment._id}>
                      <Link to={"/appointment/" + appointment._id }>
                        {appointment.visit} 
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h5 className="text-center">No Saved Appointments</h5>
              )}
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default SavedAppt;