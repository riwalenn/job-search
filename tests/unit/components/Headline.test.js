import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/Headline";

describe("Headline", () => {
    beforeEach(() => {
        jest.useFakeTimers("legacy");
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('displays introductory action verb', function () {
        const wrapper = mount(Headline);
        const actionPhrase = wrapper.find("[data-test='action-phrase']");

        expect(actionPhrase.text()).toBe("Build for everyone");
    });

    it('changes action verb at a consistent interval', function () {
        mount(Headline);
        expect(setInterval).toHaveBeenCalled();
    });

    it('swaps action verb after first interval', async function () {
        const wrapper = mount(Headline);
        jest.runOnlyPendingTimers();
        await nextTick();
        const actionPhrase = wrapper.find("[data-test='action-phrase']");
        expect(actionPhrase.text()).toBe("Create for everyone");
    });

    it('removes interval when component disappears', function () {
        const wrapper = mount(Headline);

        wrapper.unmount();
        expect(clearInterval).toHaveBeenCalled();
    });
});
