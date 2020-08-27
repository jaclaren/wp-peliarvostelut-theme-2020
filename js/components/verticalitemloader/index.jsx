import React, {useState, useEffect} from 'react';

import TrackedItem from '../trackeditem/index.jsx';

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

const setItemsByPage = (page, itemsPerPage, items) => {
  console.log("Set items by page", page, itemsPerPage, items)
  return items.map((item, index) => {
    if(index < page + itemsPerPage)
      item.showImage = true

    return item
  })
}

const VerticalItemLoader = props => {
  const [items, _setItems] = React.useState([]);
  const ref = React.useRef()
  const [page, _setPage] = React.useState(0);
  const [pageWidth, _setPageWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      ref.current.scrollLeft = 0;     // reset scroll on resize to avoid mode overlap
    })

    generateSkeletonObjects(_setItems, items, props.maxItems)

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
            // _setItems(props.mock ? props.mock : setItemsByPage(props.page, props.itemsPerPage, response.body.compilations))
            _setItems(props.mock ? props.mock : response.body.compilations)
          }, 800)
        }
    })

    if(ref.current && pageWidth == 0) {
      _setPageWidth(ref.current.clientWidth)
    }

  }, [])

  return <div ref={ref} style={{ marginLeft: window.screen.width <= 1200 ? 0 : `-${(pageWidth * props.page) + (props.page * 10)}px` }} className={props.class}>
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

export default VerticalItemLoader
