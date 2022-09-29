<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span class="font-semibold text-sm"
              ><font-awesome-icon
                :icon="['fas', 'city']"
                class="ml-4 mr-3 self-center text-brand-gray-4"
              />{{ job.organization }}</span
            >
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5 text-sm"
              >
                {{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <span>Ajoutée le {{ job.dateAdded }}</span>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Job } from "@/api/types";

export default defineComponent({
  name: "JobListing",
  props: {
    job: {
      type: Object as PropType<Job>,
      required: true,
    },
  },
  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
    return { jobPageLink };
  },
});
</script>
