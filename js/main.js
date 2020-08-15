import React, { Component } from "react";
import ReactDOM from "react-dom";

import Score from './components/score/index.jsx'
import CardScroller from './components/cardscroller/index.jsx'

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
    />
    ,
    _
  );
})
