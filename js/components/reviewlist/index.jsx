import React from 'react';
import ReviewSkeleton from '../reviewskeleton/index.jsx';
import ReviewCard from '../reviewcard/index.jsx';
import ContentGrid from '../contentgrid/index.jsx';
import * as Utils from '../../utils/generic.js';

import axios from 'axios';

let observer = null;

const ReviewList = props => {
  const [items, _setItems] = React.useState(Array(props.itemsPerLoad).fill(null).map((u, i) => { return { reload : true } }))
  const [error, _setError] = React.useState(false)
  const [loaded, _setLoaded] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    // window.addEventListener("keypress", () => {      // FOR DEBUGGING
    //   _setItems(
    //     Array(props.itemsPerLoad).fill(null).map((u, i) => { return {
    //       title : 'Example game Example game Example game Example game',
    //       site_name : 'Gamesite',
    //       platform : 'PC',
    //       img : 'http://dev-peliarvostelut.net/wp-content/uploads/2020/08/DprojectswebPeliarvostelutNETwwwwp-contentuploads2020081597492664_66.png'
    //     } })
    //   )
    // });

    observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if(entry.isIntersecting && !loaded) {
          axios.get(
            `/wp-json/gamesapi/latest_reviews?displaytype=full&per_page=${props.itemsPerLoad}`, {
              headers: {
                'X-WP-Nonce': props.nonce
              }
            }
          )
          .then(response => {
            if(response.data) {
              _setItems(props.mock ? props.mock : response.data)
              _setLoaded(true)
            }
          })
          .catch(error => {
            _setError(true)
          })

        }
      })


    }, {});

    observer.observe(ref.current)

  }, [])

  React.useEffect(() => {
    if(loaded)
      observer.unobserve(ref.current)
  }, [loaded])

  return <div ref={ref} className="c-reviewlist--grid">{
    items.map((item, index) => {
      return <ReviewCard
        item={item}
        index={index}
        key={`reviewcard_${index}`}/>
    })
  }</div>
}

ReviewList.defaultProps = {
  page : 0,
  maxPageCount : 5
}

export default ReviewList;
