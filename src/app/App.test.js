import { mount } from "enzyme";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { HomePage } from "./pages";

describe('renders learn react link', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<App />))

  test("should have the Router and Route components", () => {
    expect(wrapper.find(Router)).toHaveLength(1);

    expect(wrapper.find(Route).prop("path")).toEqual("/");
  });

  test("should show the HomePage component on render", () => {

    expect(wrapper.find(HomePage)).toHaveLength(1);
  })
});
