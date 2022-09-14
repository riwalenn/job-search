import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings";
import axios from "axios";

jest.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("fetches jobs", function () {
    axios.get.mockReturnValue({ data: [] });

    const $route = createRoute();

    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async function () {
    axios.get.mockReturnValue({ data: Array(15).fill({}) });
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const wrapper = shallowMount(JobListings, createConfig($route));

    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");

    expect(jobListings).toHaveLength(10);
  });

  describe("when query params exclude page number", () => {
    it("displays page number 1", function () {
      const queryParams = { page: undefined };
      const $router = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($router));

      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("when query params includes page number", () => {
    it("displays page number", function () {
      const queryParams = { page: "3" };
      const $router = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($router));

      expect(wrapper.text()).toMatch("Page 3");
    });
  });
});
