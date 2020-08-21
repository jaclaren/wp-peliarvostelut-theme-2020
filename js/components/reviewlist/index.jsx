import React from 'react';
import ReviewSkeleton from '../reviewskeleton/index.jsx';
import ReviewCard from '../reviewcard/index.jsx';

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

const ReviewList = props => {
  const [eventHandlerSet, _setEventHandler] = React.useState(false);
  const [bottomReached, _setBottomReached] = React.useState(false);
  const [currentPage, _setCurrentPage] = React.useState(0);
  const [loading, _setLoading] = React.useState(false);

  const [reviews, _setReviews] = React.useState([
  ]);
  const ref = React.useRef(reviews);

  const handleScroll = event => {
    if(isInViewport(ref.current)) {
      _setBottomReached(true)
    }
  }

  React.useEffect(() => {
    generateSkeletonObjects(_setReviews, reviews, props.itemsToLoad);
    _setLoading(true)
  }, [])

  React.useEffect(() => {
    if(loading)
      fillRemainingSkeletonObjects(currentPage, _setReviews,reviews , props, _setLoading)
  }, [currentPage, loading])

  React.useEffect(() => {

    if(!eventHandlerSet)
      window.addEventListener("scroll", handleScroll)

    _setEventHandler(true)

  }, [reviews, eventHandlerSet]);

  React.useEffect(() => {
    if(bottomReached && reviews.length <= props.maxItems && !loading) {
      generateSkeletonObjects(_setReviews, reviews, props.itemsToLoad);
      _setLoading(true)
      _setCurrentPage(currentPage+1)
      _setBottomReached(false)
    }

  }, [bottomReached, loading])

  return <div class="row" ref={ref}>{reviews.map(review => {
    return review ? (<ReviewCard {...review} />) : (
      <ReviewSkeleton
        {...review}
      />
    )
  })}
  </div>
}

export default ReviewList;
