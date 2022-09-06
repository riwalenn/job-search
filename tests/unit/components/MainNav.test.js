import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", function () {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Careers");
  });

  it("displays menu items for navigation", function () {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuTexts).toEqual([
      "Qui sommes-nous ?",
      "Localisations",
      "Nous rejoindre",
      "Etudiants",
      "Emplois",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", function () {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays user profile picture", async function () {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click"); //trigger a click on a test

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
