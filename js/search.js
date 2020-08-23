export default () => {
  document.getElementById('main-search-icon').addEventListener('click', () => openSearch())
  document.getElementById('search-close').addEventListener('click', () => closeSearch())
}

function openSearch() {
  // document.getElementById("search__overlay").style.display = "block";
  document.getElementById('search__overlay').classList.add('opened')
  document.getElementById("search-box-input").focus();
}

// Close the full screen search box
function closeSearch() {
  document.getElementById('search__overlay').classList.remove('opened')
}
