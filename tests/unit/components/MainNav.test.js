import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
    it('displays company name', async () => {
        const wrapper = mount(MainNav);
        await wrapper.setData({
            company: "Super Corp",
            // company: "Cat Careers",
        });
        expect(wrapper.text()).toMatch("Super Corp");
    });
});