import React from 'react';
import { useRef, useState, useEffect } from 'react'

const GameQuote = props => {
  const [_itemIndex, _setItemIndex] = useState(0)

  useEffect(() => {
    _setItemIndex(0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const nextIndex = _itemIndex >= props.items.length-1 ? 0 : _itemIndex+1
      _setItemIndex(nextIndex)
    }, props.interval)
  }, [_itemIndex])

  return (
    <figure class="c-hlquote">
      <blockquote cite={props.items[_itemIndex].url} class="c-hlquote__quote">
          <p>{props.items[_itemIndex].text}</p>
      </blockquote>
        <span>--</span>
        <a href={props.items[_itemIndex].url} rel="nofollow" class="c-hlquote__site">
          {props.items[_itemIndex].site_name}
        </a>
    </figure>
  )
}

GameQuote.defaultProps = {
  interval : 8000
}

export default GameQuote;
