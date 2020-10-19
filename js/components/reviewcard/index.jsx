import React, {useState, useEffect} from 'react';

const ReviewCard = props => {

  // const [isSkeleton, _setIsSkeleton] = React.useState(!props.item.title && !props.item.href)
  const isSkeleton = !props.item.title && !props.item.href
  const extraClasses = isSkeleton ? 'skeleton' : 'u-fadein'
  const extraStyle = {animationDelay: isSkeleton ? `${props.index/10}s` : null}

  return (
    <div key={props.key}
      style={ extraStyle }
      className={`reviewlink ${extraClasses}`}>
      <div className="reviewlink__col">
        {isSkeleton ?
          <div style={ extraStyle } className={`reviewlink__img ${extraClasses}`}></div> :
          <img className={`reviewlink__img ${extraClasses}`} src={props.item.coverimg} />
        }
      </div>
      <div className="reviewlink__col">
        <h3 style={ extraStyle } className={`reviewlink__title ${extraClasses}`}>{!isSkeleton ? props.item.title : null}</h3>
        <div style={ extraStyle } className={`reviewlink__site ${extraClasses}`}>{!isSkeleton ? props.item.site : null}</div>
        <div style={ extraStyle } className={`reviewlink__platform ${extraClasses}`}>{props.item.platform}</div>
        <span className="reviewlink__buttonrow">
          <a href={props.item.url} style={ extraStyle } className={`button button--secondary reviewlink__button ${extraClasses}`}>Arvostelu</a>
          <a href={props.item.game_url} style={ extraStyle } className={`button button--secondary reviewlink__button ${extraClasses}`}>Kooste</a>
        </span>
      </div>
    </div>
  )
}

export default ReviewCard;
