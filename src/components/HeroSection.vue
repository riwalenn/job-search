<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-col-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5">image</div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline";
import JobSearchForm from "@/components/JobSearchForm";

export default {
  name: "HeroSection",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
