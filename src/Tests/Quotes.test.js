// setup file
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import Quotes from "../Layout/Quotes/Quotes";
import QuotesList from "../Layout/Quotes/QuotesList";

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

afterEach(() => {
    global.Math.random.mockRestore();
})

test('Check is quotes visible', () => {
    let wrapper = mount(<Quotes/>);
    expect(wrapper.find(".Quotes-Quote").text()).toEqual(QuotesList[0].quote);
});