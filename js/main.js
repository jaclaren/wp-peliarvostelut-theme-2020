import React, { Component } from "react";
import ReactDOM from "react-dom";

import Score from './components/score/index.jsx'

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
