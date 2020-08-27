import React from 'react';

const GameCard = props => {
  return (
    <React.Fragment>
      <span>
        {props.coverimage && props.displayImage ? <img src={props.coverimage} /> : null}
      </span>
      <div class="compilationcard__title">
        <div>
          {props.coverimage ? props.title : ''}
        </div>
      </div>
    </React.Fragment>
  )
}

export default GameCard;
