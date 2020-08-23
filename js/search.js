const searchButton = document.getElementById('main-search-icon');

export default () => {
  document.getElementById('main-search-icon').addEventListener('click', () => openSearch())
  document.getElementById('search-close').addEventListener('click', () => closeSearch())
}

function openSearch() {
  // document.getElementById("search__overlay").style.display = "block";
  searchButton.classList.add('hidden')
  document.getElementById('search__overlay').classList.add('opened')
  document.getElementById("search-box-input").focus();
}

// Close the full screen search box
function closeSearch() {
  searchButton.classList.remove('hidden')
  document.getElementById('search__overlay').classList.remove('opened')
}
