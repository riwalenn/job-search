import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion";

describe("Accordion", () => {
  it("renders child", async function () {
    const wrapper = mount(Accordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        default: "<h3>My nested child</h3>",
      },
    });

    expect(wrapper.text()).not.toMatch("My nested child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    expect(wrapper.text()).toMatch("My nested child");
  });

  describe("when we do not provide custom child content", () => {
    it("renders default content", async function () {
      const wrapper = mount(Accordion, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        props: {
          header: "Test Header",
        },
      });

      const clickableArea = wrapper.find("[data-test='clickable-area']");

      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("Désolé, il n'y a pas de contenu !");
    });
  });
});
