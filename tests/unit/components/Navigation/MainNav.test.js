import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", function () {
    const $store = { state: { isLoggedIn: false } };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Careers");
  });

  it("displays menu items for navigation", function () {
    const $store = { state: { isLoggedIn: false } };
    const wrapper = shallowMount(MainNav, createConfig($store));
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
      const $store = { state: { isLoggedIn: false } };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });

    it("issues call to Vuex to login user", async function () {
      const commit = jest.fn();
      const $store = { state: { isLoggedIn: false } };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");
      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", function () {
      const $store = { state: { isLoggedIn: true } };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnavigation menu with additional information", function () {
      const $store = { state: { isLoggedIn: true } };
      const wrapper = shallowMount(MainNav, createConfig($store));

      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
