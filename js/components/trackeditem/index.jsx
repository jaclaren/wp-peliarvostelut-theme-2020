import React, {useState, useEffect} from 'react';

const TrackedItem = props => {
  const ref = React.useRef()
  const [show, _setShow] = React.useState(true);
  const [hasIntersected, _setHasIntersected] = React.useState(false);

  const cb = React.useCallback(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        props.onIntersect()
        _setHasIntersected(true)
      }
    })
  })

  React.useEffect(() => {
      // REMEMBER POLYFILL
      if(props.isIntersecting) {
        var intersectionObserver = new IntersectionObserver(cb, {
          root : props.observable
        });

        intersectionObserver.observe(ref.current);
      }
  }, [])

  
    return <a key={props.index} href={ props.item ? props.item.href : '#' }
      className={show && props.isLoaded ? props.loadedClass : props.defaultClass }
      style={ !props.isLoaded ? {animationDelay: `${props.index/10}s`} : null}
      key={'trackedItem'.concat(props.index)}
      ref={ref}>
      { props.itemWrapper(Object.assign({}, props.item, { key: props.index, index: props.index, displayImage : props.show })) }
    </a>
}

export default TrackedItem
