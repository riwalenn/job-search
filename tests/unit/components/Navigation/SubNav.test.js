import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav";

describe("SubNav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: { $route: { name: routeName } },
      stubs: { FontAwesomeIcon: true },
    },
  });

  describe("when user is on job page", () => {
    it("displays job count", function () {
      const routeName = "Resultats";
      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("does not display job count", function () {
      const routeName = "Accueil";
      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
