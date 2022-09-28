<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">Que voulez-vous faire ?</h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Effacer les filtres"
        type="secondary"
        data-test="clear-user-job-filters"
        @click="clearUserJobFilterSelections"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { CLEAR_USER_JOB_FILTER_SELECTIONS } from "@/store/constants";

export default defineComponent({
  name: "JobFiltersSidebarPrompt",
  components: {
    ActionButton,
  },
  setup() {
    const store = useStore(key);
    const clearUserJobFilterSelections = () => {
      store.commit(CLEAR_USER_JOB_FILTER_SELECTIONS);
    };

    return {
      clearUserJobFilterSelections,
    };
  },
});
</script>
