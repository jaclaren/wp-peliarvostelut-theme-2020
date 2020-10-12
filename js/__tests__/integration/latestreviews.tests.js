import { configure, shallow, mount, render} from 'enzyme';
import ReviewList from '../../components/reviewlist/index.jsx'
import ContentGrid from '../../components/contentgrid/index.jsx'
import ReviewCard from '../../components/reviewcard/index.jsx'
import ReviewSkeleton from '../../components/reviewskeleton/index.jsx'
import React from 'react';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
const fetchPolyFill = require('whatwg-fetch')

configure({ adapter : new Adapter() })

global.fetch = fetchPolyFill.fetch
global.Request = fetchPolyFill.Request
global.Headers = fetchPolyFill.Headers
global.Response = fetchPolyFill.Respons

global.fetchCalled = 0;
const itemsPerLoad = 6;

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

global.fetch = fetch

describe('Horizontal review list', () => {
  it(`Initializes with ${itemsPerLoad} review skeleton cards`, async () => {
    const wrapper = mount(<ReviewList itemsPerLoad={itemsPerLoad} />)
    await Promise.resolve();
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad);
  })

  it(`Generates new skeleton items immediately on page change`, async () => {
    const wrapper = mount(<ReviewList itemsPerLoad={itemsPerLoad}/>)
    await Promise.resolve();
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad);
    wrapper.setProps({ page : 1})
    wrapper.update()
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad*2);
  })

  it(`Replaces skeleton items with ReviewCards on succesful data fetch`, async () => {
    const wrapper = mount(<ReviewList itemsPerLoad={itemsPerLoad}/>)
    await Promise.resolve();
    expect(wrapper.find(ReviewCard).length).toEqual(itemsPerLoad)
    expect(wrapper.find(ReviewSkeleton).length).toEqual(0)
   })

  it(`Displays en error message when data can't be fetched`, async done => {
    await act(async () => {
      const wrapper = mount(<ReviewList itemsPerLoad={itemsPerLoad}/>)
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject('error'));
      const errorResponse = () => Promise.reject();
      try {
        await act(errorResponse)
      } catch (e) {
      }

      setTimeout(() => {
        wrapper.update()
        expect(wrapper.find('.error').length).toEqual(1)
        done()
      }, 200)
    })
   })

  it(`Sends a new fetch on page change`, async () => {
    expect(true).toEqual(false)
  })

  it(`Respects max page count`, async () => {
    global.fetch = fetch
    const maxPage = 5
    const wrapper = mount(<ReviewList itemsPerLoad={itemsPerLoad} maxPageCount={maxPage}/>)
    wrapper.setProps({ page : 3 })
    wrapper.update()
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad * 4)
    wrapper.setProps({ page : 5 })
    wrapper.update()
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad * (maxPage+1))
    wrapper.setProps({ page : 20 })
    wrapper.update()
    expect(wrapper.find(ReviewSkeleton).length).toEqual(itemsPerLoad * (maxPage+1))
   })

  it(`Sends correct fetches`, async () => {
    const nonce = "abcd"
   const wrapper = mount(<ReviewList
     itemsPerLoad={itemsPerLoad}
     nonce={nonce}
     />)
   await Promise.resolve()
   expect(global.fetch.mock.calls[global.fetch.mock.calls.length-1][0]).toEqual("/wp-json/compilations/undefined?items=undefined");
   expect(global.fetch.mock.calls[global.fetch.mock.calls.length-1][1]).toEqual({ headers: { 'X-WP-Nonce': nonce } });
  })

})
