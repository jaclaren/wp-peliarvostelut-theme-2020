import React, { Component } from "react";
import ReactDOM from "react-dom";

import Score from './components/score/index.jsx'
import CardScroller from './components/cardscroller/index.jsx'
import ReviewList from './components/reviewlist/index.jsx'

import initHeader from './header.js'
import initSearch from './search.js'

document.querySelectorAll('.c-score').forEach(_ => {
  ReactDOM.render(
    <Score
      radius="40"
      score={_.getAttribute('data-score')}
    />
    ,
    _
  );
})

document.querySelectorAll('.games').forEach(_ => {
  ReactDOM.render(
    <CardScroller
      maxItems={7*3}
      itemsToLoad={20}
      itemsPerPage={7}
      mode={_.dataset.mode}
    />
    ,
    _
  );
})

document.querySelectorAll('.reviews').forEach(_ => {
  ReactDOM.render(
    <ReviewList
    maxItems={100}
    itemsToLoad={3}
    />
    ,
    _
  );
})

initHeader();
initSearch();
