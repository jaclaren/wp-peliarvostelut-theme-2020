const getIndexesByPage = (page, totalItems, itemsPerPage) => {
  const start = (page * itemsPerPage);
  const end = (start + itemsPerPage);

  return { start, end }
}

const fillRemainingSkeletonObjects = (page, setReviews, reviews, props, _setLoading) => {
  fetch('data/reviews_01.json')
    .then(response => response.json())
    .then(response => {
      setTimeout(() => {
        const indexes = getIndexesByPage(page, reviews.length, props.itemsToLoad)
        const newReviews = reviews.map((review, index) => {
          const modIndex = index % props.itemsToLoad;

          return index >= indexes.start
          && index <= indexes.end ? response[modIndex] : review
        }
      )

      if(newReviews.length > 0)
        setReviews(newReviews)

      _setLoading(false)
    }, 5000)

      })
    }

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

const ReviewSkeleton = props => {

  return (
    <div class="box reviewcard--skeleton col-xs-12 col-sm-6 col-md-4">
      {props.title}
    </div>
  )
}


const ReviewCard = props => {
  return (
    <div class="box reviewcard col-xs-12 col-sm-6 col-md-4">
      <span>
      <img src="img/img1.png" />
      </span>
      <span>Example review</span>
      <span>2 arvostelua</span>
      <a href="" class="button button--secondary">Button</a>
    </div>
  )
}


const VerticalItemLoader = props => {
  const [eventHandlerSet, _setEventHandler] = React.useState(false);
  const [bottomReached, _setBottomReached] = React.useState(false);
  const [currentPage, _setCurrentPage] = React.useState(0);
  const [loading, _setLoading] = React.useState(false);
  const [reviews, _setReviews] = React.useState([]);

  const isHorizontal = props.direction === 'games'
  const ref = React.useRef(reviews);

  const handleScroll = event => {
    if(isInViewport(ref.current)) {
      _setBottomReached(true)
    }
  }

  const handleHorizontalScroll = (event) => {
    if(isHorizontalEnd(ref.current, event.currentTarget.scrollLeft)) {
      _setBottomReached(true)
    }
  }

  React.useEffect(() => {   // onload
    generateSkeletonObjects(_setReviews, reviews, props.itemsToLoad);
    _setLoading(true)
  }, [])

  React.useEffect(() => {  // on page change
    if(loading)
      fillRemainingSkeletonObjects(currentPage, _setReviews,reviews , props, _setLoading)
  }, [currentPage, loading])

  React.useEffect(() => {  // on reviews array changed
    if(!eventHandlerSet && !isHorizontal)
      window.addEventListener("scroll", handleScroll)

    if(isHorizontal) {
      ref.current.addEventListener('scroll', handleHorizontalScroll)
    }

    _setEventHandler(true)

  }, [reviews, eventHandlerSet]);

  React.useEffect(() => {   // on bottom reached
    if(bottomReached && reviews.length <= props.maxItems && !loading) {
      generateSkeletonObjects(_setReviews, reviews, props.itemsToLoad);
      _setLoading(true)
      _setCurrentPage(currentPage+1)
      _setBottomReached(false)
    }

  }, [bottomReached, loading])

  if(props.direction === "games") {
    return <div class="compilationcardlist" ref={ref}>{reviews.map(review => {
      return review ? props.itemWrapper(review) : props.skeletonWrapper(review)
    })}
    </div>
  }

  return <div class="row" ref={ref}>{reviews.map(review => {
    return review ? props.itemWrapper(review) : props.skeletonWrapper(review)
  })}
  </div>
}
