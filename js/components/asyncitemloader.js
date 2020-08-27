const getIndexesByPage = (page, totalItems, itemsPerPage) => {
  const start = (page * itemsPerPage);
  const end = (start + itemsPerPage);

  return { start, end }
}

const mockObject = Array.from(Array(20),
  (_, i) => {
    return
      {
        ID:i,
        title:"Doom Eternal",
        coverimage:`http:\/\/dev-peliarvostelut.net\/wp-content\/uploads\/2020\/07\/DprojectswebPeliarvostelutNETwwwwp-contentuploads2020071595092465_${i}.png`,
        href:"http:\/\/dev-peliarvostelut.net\/pelit\/doom-eternal\/"
      }
  }
)

const fillRemainingSkeletonObjects = (page, setReviews, reviews, props, _setLoading) => {
  fetch('data/mock_reviews.json')
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

      setReviews(mockObject)

      // if(newReviews.length > 0)
      //   setReviews(newReviews)

      _setLoading(false)
    }, 200)

      })
    }

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();

    var top = elem.offsetTop;
    var left = elem.offsetLeft;
    var width = elem.offsetWidth;
    var height = elem.offsetHeight;

    const isAtBottom = (top + height) <= (window.pageYOffset + window.innerHeight)

    return isAtBottom;
};

const RRRR = props => {
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

// if(document.getElementById('reviews')) {
//
//   ReactDOM.render(
//     <VerticalItemLoader
//     maxItems={100}
//     itemsToLoad={3}
//     itemWrapper={props => <ReviewCard {...props} />}
//     skeletonWrapper={props => <ReviewSkeleton {...props} />}
//     />,
//     document.getElementById('reviews')
//   );
// }
