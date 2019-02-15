import React, { Component } from "react";
import Kid from "../components/Kid";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class SavedKids extends Component {
  state = {
    kids: []
  };

 
  componentDidMount() {
   this.getSavedKids();
  }

  getSavedKids = () => {
    API.getKids()
      .then(res =>
        this.setState({
          kids: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleKidDelete = id => {
    API.deleteKid(id).then(res => this.getKids());
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
                    <Kid
                      key={kids._id}
                      name={kids.name}
                    
                      Button={() => (
                        <button
                          onClick={() => this.handleKidDelete(kids._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Kids</h2>
              )}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default SavedKids;