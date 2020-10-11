import React, {useState, useEffect} from 'react';

const ReviewCard = props => {
  return (
    <div key={props.key} class="box reviewcard col-xs-12 col-sm-6 col-md-4">
      <div class="c-reviewcard__col">
        <img src={props.img} />
      </div>
      <div class="c-reviewcard__col">
        <h3>{props.title}</h3>
        <div>{props.site}</div>
        <div>{props.platform}</div>
        <div>2 arvostelua</div>
        <a href="" class="button button--secondary">Lue arvostelu</a>
      </div>
    </div>
  )
}

export default ReviewCard;
