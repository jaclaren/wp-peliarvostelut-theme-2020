import React, {useState, useEffect} from 'react';

import TrackedItem from '../trackeditem/index.jsx';

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
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


    fetch(`/wp-json/compilations/${props.mode}`)
    // fetch(`/wp-json/gamesapi/latest_games?limit=${props.maxItems}`)
      .then(response => response.json())
      .then(response => {
        if(response.body) {
          setTimeout(() => {
            _setItems(response.body.compilations)
          }, 800)
        }
    })

    if(ref.current && pageWidth == 0) {
      _setPageWidth(ref.current.clientWidth)
    }

  }, [])

  console.log(items)

  return <div ref={ref} style={{ marginLeft: `-${(pageWidth * props.page) + (props.page * 10)}px` }} className={props.class}>
      {
        items.map((item, index) => {

          const isLoaded = item && item.title && item.title.length > 0;

          return <TrackedItem
            observable={ref.current}
            isLoaded={isLoaded}
            loadedClass={props.loadedClass}
            defaultClass={props.defaultClass}
            item={item}
            index={index}
            itemWrapper={isLoaded ? props.itemWrapper : props.skeletonWrapper}
            ></TrackedItem>
      })
    }
  </div>
}

export default VerticalItemLoader
