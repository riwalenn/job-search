import { shallowMount, flushPromises } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings";
import axios from "axios";

jest.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", function () {
    axios.get.mockReturnValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each received job", async function () {
    axios.get.mockReturnValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(15);
  });
});
