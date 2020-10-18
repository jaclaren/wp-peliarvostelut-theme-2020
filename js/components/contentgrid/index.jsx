import React, {useState, useEffect} from 'react';

import axios from 'axios'

import TrackedItem from '../trackeditem/index.jsx';

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
    return Array(num).fill(null).map((u, i) => { reload: true })  
}

const setItemsByPage = (page, itemsPerPage, items) => {
  return items.map((item, index) => {
    if(index < page + itemsPerPage)
      item.showImage = true

    return item
  })
}

const ContentGrid = props => {
  const [items, _setItems] = React.useState(generateSkeletonObjects());
  const ref = React.useRef()
  const [page, _setPage] = React.useState(0);
  const [pageWidth, _setPageWidth] = React.useState(0);
  const [error, _setError] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      ref.current.scrollLeft = 0;
    })

    axios.get(
      `${props.endpoint}${props.itemsToLoad}`, {
        headers: {
          'X-WP-Nonce': props.nonce
        }
      }
    )
      .then(response => {
        if(response.data) {
          _setItems(props.mock ? props.mock : response.data)
        }
    })
    .catch((error) => {
      _setError(true)
    })

    if(ref.current && pageWidth == 0) {
      _setPageWidth(ref.current.clientWidth)
    }

  }, [])

  return <div key={props.key ? props.key : 'contentrow'} ref={ref} className={props.class}>
    { error ? <div className="error">{props.errorText}</div> :
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

ContentGrid.defaultProps = {
  errorText : 'Virhe: sisältölistausta ei voitu noutaa.'
}

export default ContentGrid
