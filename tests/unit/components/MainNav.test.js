import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
    it('displays company name', function () {
        const wrapper = mount(MainNav);
        expect(wrapper.text()).toMatch("Cat Careers");
    });
});