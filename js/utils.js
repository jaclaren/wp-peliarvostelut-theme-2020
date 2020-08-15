var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();

    var top = elem.offsetTop;
    var left = elem.offsetLeft;
    var width = elem.offsetWidth;
    var height = elem.offsetHeight;

    const isAtBottom = (top + height) <= (window.pageYOffset + window.innerHeight)

    return isAtBottom;
};

var isHorizontalEnd = function (elem) {
    var bounding = elem.getBoundingClientRect();

    var top = elem.offsetTop;
    var left = elem.offsetLeft;
    var width = elem.offsetWidth;
    var height = elem.offsetHeight;

    const isAtBottom = (top + height) <= (window.pageYOffset + window.innerHeight)

    return isAtBottom;
};
