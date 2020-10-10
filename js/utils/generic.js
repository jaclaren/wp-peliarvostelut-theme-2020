var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();

    var top = elem.offsetTop;
    var left = elem.offsetLeft;
    var width = elem.offsetWidth;
    var height = elem.offsetHeight;

    const isAtBottom = (top + height) <= (window.pageYOffset + window.innerHeight)

    return isAtBottom;
};


const generateSkeletonObjects = (setReviews, reviews, num = 3) => {
  setReviews(reviews.concat(
    Array(num).fill(null).map((u, i) => { reload: true })
  ))
}

const generateSkeletonReviews = (num) => {
  let reviews = Array(num).fill(null).map((u,i) => {
    return {
      loaded : false
    }
  })

  return reviews
}

module.exports = {
  isInViewport,
  generateSkeletonObjects,
  generateSkeletonReviews
}
