import { ReactWrapper, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Unit testing", () => {
    it("renders without crashing", () => {
        ReactWrapper;
    });

    it("count the correct defaulted task number", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("task")).to.have.lengthOf(3);
    });

    it("default to be view", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("#viewTemplate")).to.have.lengthOf(3);
    });
});

test("snapshot test", () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
