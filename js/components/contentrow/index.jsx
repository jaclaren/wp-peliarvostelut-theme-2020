import React, {useState, useEffect} from 'react';

import TrackedItem from '../trackeditem/index.jsx';
import * as Utils from '../../utils/generic.js';

const ContentGrid = props => {
  const [items, _setItems] = React.useState([]);
  const ref = React.useRef()
  const [page, _setPage] = React.useState(0);
  const [pageWidth, _setPageWidth] = React.useState(0);
  const [error, _setError] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      ref.current.scrollLeft = 0;
    })

    Utils.generateSkeletonObjects(_setItems, items, props.maxItems)

    fetch(
      `/wp-json/compilations/${props.mode}?items=${props.itemsToLoad}`, {
        headers: {
          'X-WP-Nonce': props.nonce
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        if(response.body) {
          setTimeout(() => {
            _setItems(props.mock ? props.mock : response.body.compilations)
          }, 800)
        }
    })
    .catch(error => {
      _setError(true)
    })

    if(ref.current && pageWidth == 0) {
      _setPageWidth(ref.current.clientWidth)
    }

  }, [])

  return <div key="contentrow" ref={ref} className={props.class}>
    { error ? <div className="error">Errortext</div> : null }
      {
        items.map((item, index) => {
          const isLoaded = item && item.title && item.title.length > 0;
          const isOnPage = (index < (props.itemsPerPage * props.page) + props.itemsPerPage)
          const isPreviousPage = props.previousPage > props.page
          const isIntersectionObject = (index % props.itemsPerPage) == 0

          return <TrackedItem
            observable={ref.current}
            show={isOnPage || isPreviousPage}
            isLoaded={isLoaded}
            loadedClass={props.loadedClass}
            defaultClass={props.defaultClass}
            isIntersecting={isIntersectionObject}
            onIntersect={() => props.changePage(index / props.itemsPerPage)}
            item={item}
            index={index}
            itemWrapper={isLoaded ? props.itemWrapper : props.skeletonWrapper}
            >
            </TrackedItem>
      })
    }
  </div>
}

export default ContentGrid
