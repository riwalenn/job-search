import { shallowMount } from "@vue/test-utils";

import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

describe("JobFiltersSidebar", () => {
  it("allow user to filter jobs by job to types", function () {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));

    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );
    //@ts-ignore
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Types de contrats");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });

  it("allow user to filter jobs by organizations", function () {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));

    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='organizations-filter']"
    );
    //@ts-ignore
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Entreprises");
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
