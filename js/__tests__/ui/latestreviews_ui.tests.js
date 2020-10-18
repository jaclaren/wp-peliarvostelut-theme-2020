import React from "react";
import ReviewList from '../../components/reviewlist/index.jsx'

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import * as Utils from '../utils/generic.js'

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

Utils.initAll(container)
jest.useFakeTimers();

describe('Latest reviews UI tests', () => {
  it('Loads initial skeleton items', () => {
    act(() => {
      const wrapper = render(<ReviewList itemsPerLoad={5} />, container);

      act(() => {
        jest.advanceTimersByTime(5000);
      });
    })
  })

})
