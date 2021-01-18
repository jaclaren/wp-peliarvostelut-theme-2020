import React, { Component } from "react";
import ReactDOM from "react-dom";

import Score from './components/score/index.jsx'
import CardScroller from './components/cardscroller/index.jsx'
import ReviewList from './components/reviewlist/index.jsx'
import TopGames from './components/topgames/index.jsx'
import GameQuote from './components/gamequote/index.jsx'

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
      maxItems={7*4}
      itemsToLoad={7*4}
      itemsPerPage={7}
      nonce={localizedVars.nonce}
      mode={_.dataset.mode}
    />
    ,
    _
  );
})

document.querySelectorAll('.reviewgrid').forEach(_ => {
  ReactDOM.render(
    <ReviewList
    maxPages={5}
    onEnterViewport={() => {
      
    }}
    nonce={localizedVars.nonce}
    itemsPerLoad={9}
    endpoint="/wp-json/gamesapi/latest_reviews?count="
    />
    ,
    _
  );
})

document.querySelectorAll('#gamequote').forEach(_ => {
  ReactDOM.render(
    <GameQuote
      items={gameHighlightTexts}
    />
    ,
    _
  );
})

document.querySelectorAll('.c-topgame').forEach(_ => {
  ReactDOM.render(
    <TopGames
    items={topGames}
    />
    ,
    _
  );
})
initHeader();
initSearch();
