// setup file
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import EntriesMenu from "../Layout/EntriesMenu/EntriesMenu";
import {requestTypes} from "../Common/Services/Swapi/settings";

configure({ adapter: new Adapter() });

let entriesListLoadingFunctionData, onEntryClick;
let wrapper = mount(<EntriesMenu
    entriesListLoadingFunction={(recivedDataRequestType, recivedData)=>{
        entriesListLoadingFunctionData = recivedData;
    }}
    onEntryClick={(recivedDataRequestType, recivedData)=>{
        onEntryClick = recivedData;
    }}
/>);

test('EntriesMenu with empty data', () => {
    expect(wrapper.find('.EntriesMenu').text()).toEqual("No data available.");
});


test('EntriesMenu entry with mock data', () => {
    wrapper.setProps({contentList: {
            "results": [
                {
                    "name": "Test",
                    "url": "http://localhost/test/"
                },
            ],
            "requestConfig":{
                type: requestTypes.people,
                labelFieldName: "name",
                urlFieldName: "url",
                imgFieldName: "img",
            }
        }
    })
    expect(wrapper.find(".EntriesMenu").text()).toEqual("Test");
    expect(wrapper.find(".EntriesMenu").children()).toHaveLength(1);
    const entryButton = wrapper.find(".EntriesMenu").childAt(0);
    entryButton.simulate('click');
    expect(onEntryClick).toEqual("http://localhost/test/");

});


test('EntriesMenu pagination with mock data', () => {
    wrapper.setProps({contentList: {
            "count": 11,
            "page": 1,
            "results": [],
            "requestConfig":{
                type: requestTypes.people,
                labelFieldName: "name",
                urlFieldName: "url",
                imgFieldName: "img",
            }
        }
    })
    expect(wrapper.find(".EntriesMenu-Pagination").children()).toHaveLength(2);
    const secondPageButton = wrapper.find(".EntriesMenu-Pagination").childAt(1);
    expect(secondPageButton.text()).toEqual("2");
    secondPageButton.simulate('click');
    expect(entriesListLoadingFunctionData).toEqual(2);
});