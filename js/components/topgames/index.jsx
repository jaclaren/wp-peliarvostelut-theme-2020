import React, {useState, useEffect} from 'react';

import ChevronIcon from '../chevronicon/index.jsx';

import Score from '../score/index.jsx';

const TopGames = props => {
  const [index, _setIndex] = React.useState(0);
  const [animationClass, _setAnimationClass] = React.useState('u-fadein');
  const [animationComplete, _setAnimationComplete] = React.useState(true);

  React.useEffect(() => {

  }, [])

  const anim = () => {
    _setAnimationClass('u-fadeout')
    // _setAnimationComplete(false)

    setTimeout(() => {
      _setAnimationClass('u-fadein')
      setTimeout(() => {
        _setAnimationComplete(true)
      },1000)
    }, 0)
  }

  const nextPage = () => {
    const nextIndex = index+1;
    _setIndex(nextIndex > props.maxItems-1 ? 0 : nextIndex)

  }

  const previousPage = () => {
    const previousIndex = index-1;
    _setIndex(previousIndex < 0 ? props.maxItems-1 : previousIndex)
    // anim()
  }


  const item = props.items[index]

  return <React.Fragment>
    <div className="col-xs-12 col-md-8 c-topgame__nav">
      <h2>Top 10 uudet</h2>
    </div>

      <div className="col-xs-12 col-md-4 c-topgame__nav">
        <button onClick={() => previousPage()}><ChevronIcon direction="left" /></button>
        <div className="c-topgame__nav__counter">
          <span>{index+1}</span>
          <span>/</span>
          <span>{props.maxItems}</span>
        </div>
        <button onClick={() => nextPage()}><ChevronIcon direction="right" /></button>
      </div>
        <div className={"col-xs-12 col-sm-8 col-md--full".concat(' '+animationClass)}>
          <div className="box video-container video-container__column" style={!animationComplete ? {visibility: 'hidden'} : null }>
            <iframe
              width="100%"
              height="100%"
              src={item.video}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      <div className={"video-container__column col-xs-12 col-sm-4".concat(' '+animationClass)}>
        <div className="box">
          <div className="row compilationcard--primary middle-xs">
            <section className="col-xs-8 col-sm-12">
              <h2>{item.title}</h2>
              <span className="compilationcard__meta">{item.metas}</span>
              <a href={item.href} className="button button--solid">
                Kooste
              </a>
            </section>
            <div className="col-xs-4 col-sm-12 first-sm">
              <div className="o-container o-container-xs--center o-container-xs--middle">
                <Score radius="40" score={item.score} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
}

TopGames.defaultProps = {
  maxItems : 10
}

export default TopGames
