const GameSkeleton = props => {
  return (
    <React.Fragment>
    <span>
    </span>
    <span></span>
    </React.Fragment>

  )
}

const GameCard = props => {
  return (
    <React.Fragment>
      <span>
        {props.displayImage ? <img src={props.img} /> : null}
      </span>
      <div class="compilationcard__title">
        <div>
          {props.displayImage ? props.title : ''}
        </div>
      </div>
    </React.Fragment>
  )
}

const TrackedItem = props => {
  const ref = React.useRef()
  const [show, _setShow] = React.useState(false);

  const cb = React.useCallback(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        _setShow(true)
      }
    })
  })

  React.useEffect(() => {
      // REMEMBER POLYFILL
      var intersectionObserver = new IntersectionObserver(cb, {
        root : props.observable
      });

      intersectionObserver.observe(ref.current);
  }, [])

  // className={show && props.isLoaded ? 'compilationcard' : 'compilationcard--skeleton'}
  return <a href="#"
      className={show && props.isLoaded ? props.loadedClass : props.defaultClass }
      style={ !props.isLoaded ? {animationDelay: `${props.index/10}s`} : null}
      ref={ref}>
      { props.itemWrapper(Object.assign({}, props.item, { index: props.index, displayImage : show && props.isLoaded })) }
    </a>
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
      <div class="c-reviewcard__col">
        <img src={props.img} />
      </div>
      <div class="c-reviewcard__col">
        <h3>{props.title}</h3>
        <div>{props.site}</div>
        <div>{props.platform}</div>
        <div>2 arvostelua</div>
        <a href="" class="button button--secondary">Lue arvostelu</a>
      </div>
    </div>
  )
}

const ReviewCardFull = props => {
  return (
    <React.Fragment>
      <span>
        {props.displayImage ? <img src={props.img} /> : null}
      </span>
      <span>{props.displayImage ? props.title : ''}</span>
    </React.Fragment>
  )
}
