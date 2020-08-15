import React, {useState, useEffect} from 'react';

import CardScrollerController from '../cardscrollercontroller/index.jsx';
import VerticalItemLoader from '../verticalitemloader/index.jsx';
import GameSkeleton from '../gameskeleton/index.jsx';
import GameCard from '../gamecard/index.jsx';

const CardScroller = props => {
  const ref = React.useRef({})
  const [page, setPage] = React.useState(0);
  const [controllerVisibility, setControllerVisibility] = React.useState({ left : false, right : true })

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setPage(0)
    })
  }, [])

  React.useEffect(() => {
    const lastPage = props.maxItems / props.itemsPerPage

    setControllerVisibility(
       {
         left : page > 0,
         right : page < lastPage
       }
    );

  }, [page])

  const incrementPage = () => {
    if(props.itemsPerPage * page < props.maxItems)
      setPage(page+1)
  }

  const decrementPage = () => {
    if(page > 0)
      setPage(page-1)
  }

  return (
    <React.Fragment>
      <CardScrollerController
        show={controllerVisibility.left}
        onClick={decrementPage} />
          <VerticalItemLoader
          class="compilationcardlist"
          page={page}
          defaultClass="compilationcard--skeleton"
          loadedClass="compilationcard"
          itemWrapper={pr => <GameCard {...pr} />}
          skeletonWrapper={pr => <GameSkeleton {...pr} />}
          {...props}
          />
          <CardScrollerController
            chevronDirection="right"
            show={controllerVisibility.right}
            onClick={incrementPage} />
    </React.Fragment>
  )
}

export default CardScroller;