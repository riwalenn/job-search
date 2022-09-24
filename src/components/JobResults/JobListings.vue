<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'Resultats', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Précédent</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'Resultats', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Suivant</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import { useFilteredJobs } from "@/store/composables";
import { FETCH_JOBS } from "@/store/constants";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    const store = useStore();
    const fetchJobs = () => store.dispatch(FETCH_JOBS);

    onMounted(fetchJobs);

    const filteredJobs = useFilteredJobs();
    const currentPage = useCurrentPage();
    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { displayedJobs, previousPage, currentPage, nextPage };
  },
};
</script>
