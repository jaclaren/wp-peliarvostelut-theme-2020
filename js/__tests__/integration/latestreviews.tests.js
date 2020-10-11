import { configure, shallow, mount, render } from 'enzyme';
import ReviewList from '../../components/reviewlist/index.jsx'
import ContentGrid from '../../components/contentgrid/index.jsx'
import ReviewCard from '../../components/reviewcard/index.jsx'
import ReviewSkeleton from '../../components/reviewskeleton/index.jsx'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

const fetchPolyFill = require('whatwg-fetch')

configure({ adapter : new Adapter() })
// const component = mount(<ReviewList itemsPerLoad="6" />);

global.fetch = fetchPolyFill.fetch
global.Request = fetchPolyFill.Request
global.Headers = fetchPolyFill.Headers
global.Response = fetchPolyFill.Respons

global.fetchCalled = 0;

const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

describe('Latest reviews grid tests', () => {
  it('Generates initial items before the fetch', async () => {
    const comp = mount(<ReviewList itemsPerLoad="6" />);
    await Promise.resolve()
    expect(comp.find(ReviewSkeleton)).toHaveLength(6)

  });

  it('Sends the fetch command', () => {
    expect(global.fetch).toHaveBeenCalledWith("http:jee");
    // expect(global.fetchCalled).toEqual(1)
  });
  it('Loads new skeleton items on page change', () => {});
  it('Sends new fetch command on page change', () => {
    // expect(global.fetch.toHaveBeenCalledTimes(2))
  });

})
