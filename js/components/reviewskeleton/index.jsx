import React, {useState, useEffect} from 'react';

const ReviewSkeleton = props => {
    return (
    <div key={props.title} className="box reviewcard--skeleton col-xs-12 col-sm-6 col-md-4">
      {props.title}
    </div>
  )
}

export default ReviewSkeleton;
