import React from "react";
import Footer from "../component/Footer";

describe("Footer", () => {
  const wrapper = mount(<Footer/>);

  it("Should have a <footer>", () => {
    expect(wrapper.exists('footer')).toBe(true);
  });

  it("Should have a h1 with the text: Developed by Fabio Menozzi", () => {
    expect(wrapper.find("h1").text()).toContain("Developed by Fabio Menozzi");
  });

  it("Should have two links to social media", () => {
    expect(wrapper.find("a")).toHaveLength(2);
  });
});