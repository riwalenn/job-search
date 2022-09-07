<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Profession</label>
        <input
          type="text"
          :value="profession"
          placeholder="Développeur Frontend"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-brand-gray-3 bg-brand-gray-2"
        >à</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Où ?</label>
        <input
          type="text"
          :value="lieu"
          placeholder="Toulouse"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Rechercher" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      profession: "",
      lieu: "",
    };
  },
};
</script>
