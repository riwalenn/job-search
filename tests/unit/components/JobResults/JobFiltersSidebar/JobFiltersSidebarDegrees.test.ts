import { shallowMount } from "@vue/test-utils";

import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";

describe("JobFiltersSidebarDegrees", () => {
  it("allow user to filter jobs by degrees", function () {
    useUniqueDegreesMock.mockReturnValue(["Ph.D", "Bachelor's"]);

    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const degreesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    //@ts-ignore
    const { uniqueValues, mutation } = degreesFilter.props();
    expect(uniqueValues).toEqual(["Ph.D", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
