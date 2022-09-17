import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings";

jest.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("creates a job listing for a maximum of 10 jobs", async function () {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const $store = {
      state: {
        jobs: Array(15).fill({}),
      },
      dispatch: jest.fn(),
    };
    const wrapper = shallowMount(JobListings, createConfig($route, $store));

    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");

    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", function () {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params includes page number", () => {
    it("displays page number", function () {
      const queryParams = { page: "3" };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      expect(wrapper.text()).toMatch("Page 3");
    });
  });

  describe("when user is on first page of job results", () => {
    it("does not show link to previous page", function () {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");

      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async function () {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      await flushPromises();

      const nextPage = wrapper.find("[data-test='next-page-link']");

      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("when user is on the last page of job results", () => {
    it("does not show link to next page", async function () {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      await flushPromises();

      const nextPage = wrapper.find("[data-test='next-page-link']");

      expect(nextPage.exists()).toBe(false);
    });

    it("shows link to previous page", async function () {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const $store = {
        state: {
          jobs: Array(15).fill({}),
        },
        dispatch: jest.fn(),
      };
      const wrapper = shallowMount(JobListings, createConfig($route, $store));

      await flushPromises();

      const previousPage = wrapper.find("[data-test='previous-page-link']");

      expect(previousPage.exists()).toBe(true);
    });
  });
});
