import React from 'react';
import ReviewSkeleton from '../reviewskeleton/index.jsx';
import ReviewCard from '../reviewcard/index.jsx';
import ContentGrid from '../contentgrid/index.jsx';
import * as Utils from '../../utils/generic.js';

const ReviewList = props => {
  const [items, _setItems] = React.useState(Array(props.itemsPerLoad).fill(null).map((u, i) => { return { reload : true } }))

  React.useEffect(() => {
    window.addEventListener("keypress", () => {      // FOR DEBUGGING
      _setItems(
        Array(props.itemsPerLoad).fill(null).map((u, i) => { return {
          title : 'Example game Example game Example game Example game',
          site : 'Gamesite',
          platform : 'PC',
          img : 'http://dev-peliarvostelut.net/wp-content/uploads/2020/08/DprojectswebPeliarvostelutNETwwwwp-contentuploads2020081597492664_66.png'
        } })
      )
    });
  }, [])


  return <div className="c-reviewlist--grid">{
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
