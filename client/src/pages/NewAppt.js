import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import { Input } from "../components/Form";

class NewAppt extends Component {
  state = {
    appointment: []
  };

 //get all appointments
  componentDidMount() {
   this.loadAppointments();
  }

  loadAppointments = () => {
    API.getAppointments()
      .then(res =>
        this.setState({
          appointment: res.data
        })
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
        if (this.state.appointment && this.state.name) {
            API.saveAppointment({
                height: this.state.height,
                weight: this.state.weight,
                visit: this.state.visit,
                diagnosis: this.state.diagnosis,
                medication: this.state.medication,
                notes: this.state.notes
            })
            .then(res => this.loadAppointments())
            .catch(err => console.log(err))
        }
    };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
              <h1 className="text-center">
                <strong>Children</strong>
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div className="container-savedkids">
              {this.state.kids.length ? (
                <List>
                  {this.state.kids.map(kids => (
                    <ListItem key={kids._id}>
                      <Link to={"/kids/" + kids._id }>
                        {kids.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Kids</h2>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Appt;