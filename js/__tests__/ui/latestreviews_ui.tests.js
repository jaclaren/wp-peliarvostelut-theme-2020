import React from "react";
import ReviewList from '../../components/reviewlist/index.jsx'

import axios from 'axios'

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import * as Utils from '../utils/generic.js'

let container = null;

jest.mock('axios')

const json = '[{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null},{"title":"Nioh 2: Darkness in the Capital DLC","id":49632,"url":"https:\/\/www.gamereactor.fi\/arviot\/792853\/Nioh+2+Darkness+in+the+Capital+DLC\/","href":"https:\/\/www.peliarvostelut.net\/peliarvostelu\/nioh-2-darkness-in-the-capital-dlc\/","score":"80","site_name":"Game Reactor Suomi","summary":"Lis\u00e4\u00e4 sit\u00e4 samaa, ja muistoja Ninja Gaidenista","site":"game_reactor","write_date":null}]'

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


axios.get.mockImplementation(() =>
  Promise.resolve({ data : JSON.parse(json)})
);


Utils.initAll(container)
jest.useFakeTimers();

describe('Latest reviews UI tests', () => {
  it('Loads initial skeleton items', async () => {
    await act(async () => {
      const wrapper = render(<ReviewList itemsPerLoad={5} maxPageCount={4} endpoint="/wp-json/gamesapi/latest_reviews?count="/>, container);
      jest.advanceTimersByTime(100);
      expect(container.querySelectorAll('.reviewcard--skeleton').length).toEqual(2*5)
    })

    act(() => {
      jest.advanceTimersByTime(3000);
      console.log(1)
      expect(container.querySelectorAll('.reviewcard--skeleton').length).toEqual(0)
    })
    act(() => {
      jest.advanceTimersByTime(3000);
      expect(container.querySelectorAll('.reviewcard').length).toEqual(10)
    })

  })
  it('Replaces skeleton items as final items after succesful data fetch', () => {
  })
  it('Only displays the number of items set in props', () => {
  })

})
