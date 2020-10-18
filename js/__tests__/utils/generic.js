const fetchPolyFill = require('whatwg-fetch')
import { render, unmountComponentAtNode } from "react-dom";

let container = null;

const initAll = container => {
  setFetch()
}

const setFetch = () => {
  global.fetch = fetchPolyFill.fetch
  global.Request = fetchPolyFill.Request
  global.Headers = fetchPolyFill.Headers
  global.Response = fetchPolyFill.Respons

  global.fetchCalled = 0;
  const itemsPerLoad = 6;

}

module.exports = {
  setFetch, initAll
}
