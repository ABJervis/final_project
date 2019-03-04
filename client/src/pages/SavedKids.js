import React, { Component } from "react";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

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

  handleSelectKid = id => {
    API.getKid(id).then(res => this.getKids());
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
                        {kids.name + kids.age}
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
        <Footer />
      </Container>
    );
  }
}

export default SavedKids;