import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="btn-container">
      <Button variant="contained" color="dark">{children}
    </Button>
    </div>  
    
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
