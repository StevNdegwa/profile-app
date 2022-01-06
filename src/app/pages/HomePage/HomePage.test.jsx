import { mount } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";
import { Layout } from "antd";
import { HomePage } from "./HomePage";

describe("test <HomePage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );
  });

  test("should render Layout component", () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  test("should render link to edit profile page", () => {
    expect(
      wrapper
        .find(Link)
        .filterWhere((link) => link.prop("to") === "/edit-profile")
    ).toHaveLength(1);
  });

  test("should render link to view profile page", () => {
    expect(
      wrapper
        .find(Link)
        .filterWhere((link) => link.prop("to") === "/view-profile")
    ).toHaveLength(1);
  });
});
