import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton";

describe("ActionButton", () => {
  const properties = () => ({
    props: {
      text: "I'm so clickable",
      type: "primary",
    },
  });

  it("renders text", function () {
    const wrapper = mount(ActionButton, properties());

    expect(wrapper.text()).toMatch("I'm so clickable");
  });

  it("applies one of several styles to button", function () {
    const wrapper = mount(ActionButton, properties());
    const button = wrapper.find("button");

    expect(button.classes("primary")).toBe(true);
  });
});
