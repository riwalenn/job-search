import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
    it('displays company name', function () {
        const wrapper = mount(MainNav);
        expect(wrapper.text()).toMatch("Cat Careers");
    });

    it('displays menu items for navigation', function () {
        const wrapper = mount(MainNav);
        const navigationMenuItems = wrapper.findAll("li");
        const navigationMenuTexts = navigationMenuItems.map(item => item.text());

        expect(navigationMenuTexts).toEqual([
            "Teams",
            "Locations",
            "Life at Cat Corp",
            "How we hire",
            "Students",
            "Jobs",
        ]);
    });
});