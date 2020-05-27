// setup file
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from "../Common/Components/Loading/Loading";
import React from "react";

configure({ adapter: new Adapter() });

let wrapper = mount(<Loading loading={false}/>);

test('Check is loading hidden', () => {
    expect(wrapper.html()).not.toBeTruthy();
});

test('Check is loading visible', () => {
    wrapper.setProps({loading: true})
    wrapper.update();
    expect(wrapper.text()).toBeTruthy();
});