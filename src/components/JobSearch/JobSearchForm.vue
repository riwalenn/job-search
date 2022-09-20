<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Profession</label>
        <text-input
          v-model="profession"
          placeholder="Développeur Frontend"
          data-test="role-input"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-brand-gray-3 bg-brand-gray-2"
        >à</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Où ?</label>
        <text-input
          v-model="lieu"
          placeholder="Toulouse"
          data-test="location-input"
        />
      </div>
    </div>
    <action-button
      text="Rechercher"
      type="secondary"
      class="rounded-r-3xl"
      data-test="form-submit-button"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      profession: "",
      lieu: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "Resultats",
        query: { role: this.profession, location: this.lieu },
      });
    },
  },
};
</script>
