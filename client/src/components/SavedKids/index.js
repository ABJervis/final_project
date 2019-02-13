import React, { Component } from "react";
import Kids from "../../pages/Kids";
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
    API.getSavedKids()
      .then(res =>
        this.setState({
          kids: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
    <Container>
        <Row>
          <Col size="md-12">
            
              {this.state.kids.length ? (
                <List>
                  {this.state.kids.map(kid => (
                    <Kids
                      key={kids._id}
                      name={kids.name}
                      age={kids.age}
                      height={kids.height}
                      weight={kids.weight}
                      allergies={kids.allergies.join(", ")}
                      date={kids.date}
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
        
          </Col>
        </Row>
        <Footer />
    </Container>
    );
  }
}

export default SavedKids;