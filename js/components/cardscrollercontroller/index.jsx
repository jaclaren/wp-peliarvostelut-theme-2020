import React, {useState, useEffect} from 'react';
import ChevronIcon from '../chevronicon/index.jsx';

const CardScrollerController = props => {
  return <span className="c-cardscroller__control" style={{ opacity: props.show ? 1 : 0 }} onClick={props.onClick}>
    <ChevronIcon direction={props.chevronDirection} />
  </span>
}

export default CardScrollerController
