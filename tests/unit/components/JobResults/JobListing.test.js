import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "ILABS",
    locations: ["Indianapolis"],
    qualifications: ["Succeed"],
    ...jobProps,
  });
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", function () {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", function () {
    const jobProps = createJobProps({ organization: "ILABS" });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("ILABS");
  });

  it("renders job locations", function () {
    const jobProps = createJobProps({ locations: ["Orlando", "Jacksonville"] });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonville");
  });

  it("renders job qualifications", function () {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Develop"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));

    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });

  it("links to individual job's page", function () {
    const jobProps = createJobProps({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");

    expect(toProp).toBe("/jobs/results/15");
  });
});
