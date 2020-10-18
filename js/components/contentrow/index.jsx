import React, {useState, useEffect} from 'react';

import TrackedItem from '../trackeditem/index.jsx';
import * as Utils from '../../utils/generic.js';

import axios from 'axios'

const ContentGrid = props => {
  const [items, _setItems] = React.useState([]);
  const ref = React.useRef()
  const [page, _setPage] = React.useState(0);
  const [pageWidth, _setPageWidth] = React.useState(0);
  const [error, _setError] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if(ref.current != null)
        ref.current.scrollLeft = 0;
    })

    Utils.generateSkeletonObjects(_setItems, items, props.maxItems)

    axios.get(
      `/wp-json/compilations/${props.mode}?items=${props.itemsToLoad}`, {
        headers: {
          'X-WP-Nonce': props.nonce
        }
      }
    )
      .then(response => {
        if(response.data) {
          _setItems(props.mock ? props.mock : response.data.body.compilations)
        }
    })
    .catch(error => {
      _setError(true)
    })

    if(props.pageWidth) {
      _setPageWidth(props.pageWidth)
    }
    else if(ref.current && pageWidth == 0) {
      _setPageWidth(ref.current.clientWidth)
    }

  }, [])

  const marginLeft = window.screen.width <= 1200 ? 0 : `-${(pageWidth * props.page) + (props.page * 10)}px`

  return <div key="contentrow" ref={ref} className={props.class} style={{ marginLeft  }} >
    { error ? <div className="error">Virhe ladattaessa listaa</div> :       
        items.map((item, index) => {
          const isLoaded = item && item.title && item.title.length > 0;
          const isOnPage = (index < (props.itemsPerPage * props.page) + props.itemsPerPage)
          const isPreviousPage = props.previousPage > props.page
          const isIntersectionObject = (index % props.itemsPerPage) == 0

          return <TrackedItem
            key={'TrackedItem_'.concat(index)}
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
