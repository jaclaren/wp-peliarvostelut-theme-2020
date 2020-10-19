import React, {useState, useEffect} from 'react';

const ReviewCard = props => {
  const isSkeleton = !props.item.title && !props.item.href
  const extraClasses = isSkeleton ? 'skeleton' : ''
  const extraStyle = {animationDelay: `${props.index/10}s`}

  return (
    <div key={props.key}
      style={ extraStyle }
      className={`box col-xs-12 col-sm-6 col-md-4 reviewlink ${extraClasses}`}>
      <div className="reviewlink__col">
        {isSkeleton ?
          <div style={ extraStyle } className={`reviewlink__img ${extraClasses}`}></div> :
          <img className={`reviewlink__img ${extraClasses}`} src={props.img} />
        }
      </div>
      <div className="reviewlink__col">
        <h3 style={ extraStyle } className={`reviewlink__title ${extraClasses}`}>{props.title}</h3>
        <div style={ extraStyle } className={`reviewlink__site ${extraClasses}`}>{props.site}</div>
        <div style={ extraStyle } className={`reviewlink__platform ${extraClasses}`}>{props.platform}</div>
        <span className="reviewlink__buttonrow">
          <a href="#" style={ extraStyle } className={`button button--secondary reviewlink__button ${extraClasses}`}>Arvostelu</a>
          <a href="#" style={ extraStyle } className={`button button--secondary reviewlink__button ${extraClasses}`}>Kooste</a>
        </span>
      </div>
    </div>
  )
}



export default ReviewCard;
