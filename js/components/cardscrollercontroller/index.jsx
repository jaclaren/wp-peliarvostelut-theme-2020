import React, {useState, useEffect} from 'react';
import ChevronIcon from '../chevronicon/index.jsx';

const CardScrollerController = props => {
  return <button className="c-cardscroller__control" style={{ opacity: props.show ? 1 : 0 }} onClick={props.onClick}>
    <ChevronIcon direction={props.chevronDirection} />
  </button>
}

export default CardScrollerController
