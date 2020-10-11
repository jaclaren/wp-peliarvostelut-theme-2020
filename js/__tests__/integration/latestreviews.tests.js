import { configure, shallow, mount, render } from 'enzyme';
import ReviewList from '../../components/reviewlist/index.jsx'
import ContentGrid from '../../components/contentgrid/index.jsx'
import ReviewCard from '../../components/reviewcard/index.jsx'
import ReviewSkeleton from '../../components/reviewskeleton/index.jsx'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

const fetchPolyFill = require('whatwg-fetch')

configure({ adapter : new Adapter() })
const component = mount(<ReviewList itemsPerLoad="6" />);

// global.fetch = fetchPolyFill.fetch
// global.Request = fetchPolyFill.Request
// global.Headers = fetchPolyFill.Headers
// global.Response = fetchPolyFill.Respons

const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

describe('Latest reviews grid tests', () => {
  it('Generates initial items before the fetch', () => {
    component.update();
    expect(component.find(ReviewSkeleton)).toHaveLength(6)

    component.find(ReviewCard).forEach((c) => {
      console.log(c)
    })
  });

  it('Sends the fetch command', () => {
    // expect(global.fetch.toHaveBeenCalledTimes(1))
  });
  it('Loads new skeleton items on page change', () => {});
  it('Sends new fetch command on page change', () => {
    // expect(global.fetch.toHaveBeenCalledTimes(2))
  });

})
