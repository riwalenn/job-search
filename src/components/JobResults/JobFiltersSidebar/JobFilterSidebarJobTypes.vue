<template>
  <accordion header="Type de Contrats">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectedJobType"
            />
            <label :for="jobType" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { ref } from "vue";
import { mapMutations } from "vuex";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFilterSidebarJobTypes",
  components: {
    Accordion,
  },
  setup() {
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    return { selectedJobTypes, uniqueJobTypes };
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "Resultats" });
    },
  },
};
</script>
