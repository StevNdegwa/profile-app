import { mount } from "enzyme";
import App from './App';

describe('renders learn react link', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("should render", () => {
    expect(wrapper.find(App)).toHaveLength(1);
  })
});
