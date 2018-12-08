import React from "react";
import classes from "./NotCounterControl.css";

const notCounterControl = props => (
  <div className={classes.NotCounterControl} onClick={props.clicked}>
    {props.label}
  </div>
);

export default notCounterControl;