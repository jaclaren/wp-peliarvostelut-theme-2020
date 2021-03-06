import React from "react";
import CardScroller from '../../components/cardscroller/index.jsx'
import ContentRow from '../../components/contentrow/index.jsx'

import axios from 'axios'

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import * as Utils from '../utils/generic.js'

const observe = jest.fn();
const unobserve = jest.fn();

jest.mock('axios')

window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}))

let container = null;


jest.spyOn(window.screen, "width", "get").mockReturnValue(1800);

const json = '{"status":null,"response":null,"body":{"compilations":[{"ID":49633,"title":"Nioh 2: Darkness in the Capital DLC","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101603003553_49633.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/nioh-2-darkness-in-the-capital-dlc\/"},{"ID":49629,"title":"Crash Bandicoot 4: It\u2019s About Time","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602929612_49629.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/crash-bandicoot-4-its-about-time\/"},{"ID":49624,"title":"Ys Origin","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602849825_49624.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/ys-origin\/"},{"ID":49622,"title":"HoloVista","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602848383_49622.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/holovista\/"},{"ID":49617,"title":"Re:Turn - One Way Trip","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602739320_49617.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/return-one-way-trip\/"},{"ID":49613,"title":"Blue Yeti X \u2013 World of Warcraft Edition","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602667157_49613.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/blue-yeti-x-world-of-warcraft-edition\/"},{"ID":49609,"title":"Bartlow\u2019s Dread Machine","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602666852_49609.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/bartlows-dread-machine\/"},{"ID":49607,"title":"The Last Campfire","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602666644_49607.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/the-last-campfire\/"},{"ID":49605,"title":"Age of Empires III: Definitive Edition","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602667031_49605.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/age-of-empires-iii-definitive-edition\/"},{"ID":49601,"title":"Kirby Fighters 2","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602578281_49601.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/kirby-fighters-2\/"},{"ID":49583,"title":"Star Renegades","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602223152_49583.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/star-renegades\/"},{"ID":49578,"title":"Democracy 4","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602149257_49578.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/democracy-4\/"},{"ID":49576,"title":"Skater XL","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602143156_49576.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/skater-xl\/"},{"ID":49570,"title":"Among Us","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602059414_49570.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/among-us\/"},{"ID":49568,"title":"Going Under","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101602059414_49568.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/going-under\/"},{"ID":49563,"title":"FIFA 21","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601996971_49563.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/fifa-21\/"},{"ID":49555,"title":"Ride 4","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601919695_49555.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/ride-4\/"},{"ID":49553,"title":"Tamarin","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601920759_49553.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/tamarin\/"},{"ID":49547,"title":"Mr. Driller DrillLand","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601811360_49547.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/mr-driller-drillland\/"},{"ID":49541,"title":"Worm Jazz","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601719157_49541.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/worm-jazz\/"},{"ID":49539,"title":"Metamorphosis","coverimage":"https:\/\/www.peliarvostelut.net\/wp-content\/uploads\/2020\/10\/varwwwpeliarvostelut.netpublic_htmlwp-contentuploads2020101601719486_49539.png","href":"https:\/\/www.peliarvostelut.net\/pelit\/metamorphosis\/"}]}}'

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

describe('Compilation row UI tests', () => {
  it('Loads initial items', async () => {
    const scrollHeightSpy = jest
                    .spyOn(document.documentElement, 'clientWidth', 'get')
                    .mockImplementation(() => 100);

    await act(async () => {
      const itemsPerPage = 7
      const wrapper = render(<CardScroller
        maxItems={itemsPerPage*3}
        itemsToLoad={itemsPerPage*3}
        itemsPerPage={itemsPerPage}
        nonce="abcd"
        mode="latest"
        />, container);

        jest.advanceTimersByTime(100);
        expect(container.querySelectorAll('.compilationcard--skeleton').length).toEqual(7*3)
      })

      act(() => {
        jest.advanceTimersByTime(3000);
        expect(container.querySelectorAll('.compilationcard--skeleton').length).toEqual(0)
      })

      act(() => {
        jest.advanceTimersByTime(200);
        expect(container.querySelectorAll('.compilationcard').length).toEqual(7*3)
      })
  })

  it('Changes translation on button clicks', async () => {
    const pageWidth = 2000
    const itemsPerPage = 7
    const maxPage = 3
    await act(async () => {
      const wrapper = render(<CardScroller
        maxItems={itemsPerPage*maxPage}
        itemsToLoad={itemsPerPage*3}
        itemsPerPage={itemsPerPage}
        nonce="abcd"
        mode="latest"
        pageWidth={pageWidth}
        />, container);

        jest.advanceTimersByTime(1000);
        expect(container.querySelector('.compilationcardlist').style.marginLeft).toEqual("-0px")
    })

    for(let i=1; i < 10; i++) {
        act(() => {
          container
          .querySelectorAll('.c-cardscroller__control')[1]
          .dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })

        act(() => {
          const page = i >= (maxPage-1) ? maxPage-1 : i
          const expected = (pageWidth * (page * -1))-(10*page)
            expect(container.querySelector('.compilationcardlist').style.marginLeft).toEqual(`${expected}px`)
        })
    }

  })

})
