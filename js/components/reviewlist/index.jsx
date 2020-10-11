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

  const [reviews, _setReviews] = React.useState([]);
  const ref = React.useRef(reviews);

  return <div className="row" ref={ref}>
    <ContentGrid
      page={props.page ? props.page : 0}
      class="compilationcardlist"
      defaultClass="compilationcard--skeleton"
      loadedClass="compilationcard"
      items={Utils.generateEmptyReviews(props.itemsPerLoad)}
      itemWrapper={pr => <ReviewCard {...pr} />}
      skeletonWrapper={pr => <ReviewSkeleton {...pr} />}
      {...props}
    />
  </div>
}

export default ReviewList;
