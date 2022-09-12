<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-col-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5">
          <img
            src="https://careers.google.com/jobs/dist/img/assets/hero-03_1x.085e94af78d9906f55c83d558eca4453.png"
            alt=""
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

export default {
  name: "HeroSection",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
