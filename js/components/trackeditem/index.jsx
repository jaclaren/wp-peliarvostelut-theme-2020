import React, {useState, useEffect} from 'react';

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
  return <a href={ props.item ? props.item.href : '#' }
      className={show && props.isLoaded ? props.loadedClass : props.defaultClass }
      style={ !props.isLoaded ? {animationDelay: `${props.index/10}s`} : null}
      ref={ref}>
      { props.itemWrapper(Object.assign({}, props.item, { index: props.index, displayImage : show && props.isLoaded })) }
    </a>
}

export default TrackedItem