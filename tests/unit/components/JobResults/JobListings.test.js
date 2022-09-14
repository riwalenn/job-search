import { shallowMount, flushPromises } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings";
import axios from "axios";

jest.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", function () {
    axios.get.mockReturnValue({ data: [] });
    const $route = {
      query: {
        page: "5",
      },
    };
    shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a maximum of 10 jobs", async function () {
    axios.get.mockReturnValue({ data: Array(15).fill({}) });
    const $route = {
      query: {
        page: "1",
      },
    };
    const wrapper = shallowMount(JobListings, {
      global: {
        mocks: {
          $route,
        },
      },
    });
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
