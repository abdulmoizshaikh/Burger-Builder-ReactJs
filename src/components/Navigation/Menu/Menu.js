import React from 'react'
import classes from './Menu.css';

export default props => {
  return (
    <div className={classes.Menu} onClick={props.clicked}>
      <i className="fas fa-bars"></i>
    </div>
  )
}
