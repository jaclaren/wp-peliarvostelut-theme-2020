import React from 'react';
import ReviewSkeleton from '../reviewskeleton/index.jsx';
import ReviewCard from '../reviewcard/index.jsx';
import ContentGrid from '../contentgrid/index.jsx';
import * as Utils from '../../utils/generic.js';

const ReviewList = props => {
  const [items, _setItems] = React.useState(Array(10).fill(null).map((u, i) => { return {reload: true} }))

  React.useEffect(() => {
  }, [])

  return <div className="c-reviewlist">{
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
