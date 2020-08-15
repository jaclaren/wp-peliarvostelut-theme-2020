import React from 'react';

const GameCard = props => {
  return (
    <React.Fragment>
      <span>
        {props.displayImage ? <img src={props.img} /> : null}
      </span>
      <div class="compilationcard__title">
        <div>
          {props.displayImage ? props.title : ''}
        </div>
      </div>
    </React.Fragment>
  )
}

export default GameCard;
