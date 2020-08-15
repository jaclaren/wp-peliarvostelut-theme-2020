const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

const CardScrollerController = props => {
  return <span class="c-cardscroller__control" style={{ opacity: props.show ? 1 : 0 }} onClick={props.onClick}>
    <ChevronIcon direction={props.chevronDirection} />
  </span>

}



const ChevronIcon = props => {
  const isRight = props.direction === 'right'
  const d = !isRight ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  const className = 'c-icon__chevron'

  return (
    <div className={className} onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0z" fill="none"/><path d={d}/></svg>
    </div>
  )

}

const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

const VerticalItemLoader = props => {
  const [items, _setItems] = React.useState([]);
  const ref = React.useRef()
  const [page, _setPage] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      ref.current.scrollLeft = 0;
    })

    generateSkeletonObjects(_setItems, items, props.itemsToLoad)
    fetch('data/mock_games.json')
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          _setItems(response)
        }, 800)
    })
  }, [])

  return <div ref={ref} style={{ marginLeft: `-${(1152 * props.page) + (props.page * 10)}px` }} className={props.class}>
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

// TODO: Decide between component, part of VerticalItemLoader or HOC for functionality that turns it into a full screen item scroller

document.querySelectorAll('.games').forEach(_ => {
  ReactDOM.render(
    <CardScroller
      maxItems={21}
      itemsToLoad={20}
      itemsPerPage="7"
    />
    ,
    _
  );
})

document.querySelectorAll('.reviewfull').forEach(_ => {
  ReactDOM.render(
    <VerticalItemLoader
    class="compilationcardlist"
    maxItems={100}
    itemsToLoad={50}
    defaultClass="ReviewCardFull--skeleton"
    loadedClass="ReviewCardFull"
    itemWrapper={props => <ReviewCardFull {...props} />}
    skeletonWrapper={props => <ReviewCardFull {...props} />}
    />,
    _
  );
})

if(document.getElementById('reviews')) {

  ReactDOM.render(
    <RRRR
    maxItems={100}
    itemsToLoad={3}
    itemWrapper={props => <ReviewCard {...props} />}
    skeletonWrapper={props => <ReviewSkeleton {...props} />}
    />,
    document.getElementById('reviews')
  );
}
