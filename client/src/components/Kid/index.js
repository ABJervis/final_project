import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";


function Kid({ name, age, height, weight, allergies }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
          {age && <h5 className="font-italic">{age}</h5>}
          {height && <h5 className="font-italic">{height}</h5>}
          {weight && <h5 className="font-italic">{weight}</h5>}
        </Col>
       
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <p>{allergies}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Kid;