import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input } from "../Form";




class NewAppt extends Component {
  state = {
    appointment: [],
    date: "",
    visit: "",
    height: "",
    weight: "",
    diagnosis: "",
    medication: "",
    notes: ""

  };

 //get all appointments
  componentDidMount() {
   this.loadAppointments();
  }

  loadAppointments = () => {
    API.getAppointments()
      .then(res =>
        this.setState({ appointment: res.data, date: "", visit: "", height: "", weight: "", diagnosis: "", medication: "", notes: ""})
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
        if (this.state.appointment && this.state.visit) {
            API.saveAppointment({
                date: this.state.date,
                visit: this.state.visit,  
                height: this.state.height,
                weight: this.state.weight,
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
      <Container fluid>
        <div className="addappointment">
        <Row>
          <Col size="md-12">
              <h3 className="text-center">
                New Appointment 
              </h3>
          </Col>
        </Row>
        <form>
          <Input
              value={this.state.visit}
              onChange={this.handleInputChange}
              name="visit"
              type="String"
              placeholder="Type of Visit"
              />
          <Input
              value={this.state.height}
              onChange={this.handleInputChange}
              name="height"
              type="number"
              placeholder="height (inches)"
            />
            <Input
              value={this.state.weight}
              onChange={this.handleInputChange}
              name="weight"
              type="number"
              placeholder="weight (pounds)"
            />
            <Input
              value={this.state.diagnosis}
              onChange={this.handleInputChange}
              name="diagnosis"
              type="String"
              placeholder="diagnosis"
              />
            <Input
              value={this.state.medication}
              onChange={this.handleInputChange}
              name="medication"
              type="String"
              placeholder="medication"
              />
            <Input
              value={this.state.notes}
              onChange={this.handleInputChange}
              name="notes"
              type="String"
              placeholder="notes"
              />

                <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>
                Add Appointment Details
                </Button>
            </form>
          


      </div>

      </Container>
    );
  }
}

export default NewAppt;