import React from 'react';
import ReviewSkeleton from '../reviewskeleton/index.jsx';
import ReviewCard from '../reviewcard/index.jsx';
import ContentGrid from '../contentgrid/index.jsx';
import * as Utils from '../../utils/generic.js';

const ReviewList = props => {
  const [eventHandlerSet, _setEventHandler] = React.useState(false);
  const [bottomReached, _setBottomReached] = React.useState(false);
  const [currentPage, _setCurrentPage] = React.useState(0);
  const [loading, _setLoading] = React.useState(false);
  const [items, _setItems] = React.useState([]);
  const ref = React.useRef(items);

  React.useEffect(() => {
    _setItems(Utils.generateEmptyReviews(props.itemsPerLoad))
  }, [])
  React.useEffect(() => {
    _setItems(Utils.generateEmptyReviews(props.itemsPerLoad * ((props.page ? props.page : 0)+1)))
  }, [props.page])

  return <div className="row" ref={ref}>
    <ContentGrid
      class="compilationcardlist"
      defaultClass="compilationcard--skeleton"
      loadedClass="compilationcard"
      items={items}
      itemWrapper={pr => <ReviewCard {...pr} />}
      skeletonWrapper={pr => <ReviewSkeleton {...pr} />}
      {...props}
    />
  </div>
}

export default ReviewList;
