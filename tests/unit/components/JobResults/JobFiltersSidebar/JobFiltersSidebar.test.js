import { mount } from "@vue/test-utils";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations";

describe("JobFiltersSidebarOrganizations", () => {
  it("renders unique list of organizations for filtering jobs", async function () {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(["Google", "Amazon"]),
      },
    };
    const wrapper = mount(JobFiltersSidebarOrganizations, {
      global: {
        mocks: {
          $store,
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");

    const organizationLabels = wrapper.findAll("[data-test='organization']");
    const organizations = organizationLabels.map((node) => node.text());

    expect(organizations).toEqual(["Google", "Amazon"]);
  });
});
