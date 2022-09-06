<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-col-12">
        <div class="col-start-1 col-span-1 border border-solid border-blue-700">
          1 colonne
        </div>
        <div class="col-start-2 col-span-5 border border-solid border-blue-700">
          <headline />
        </div>
        <div class="col-start-7 col-span-5 border border-solid border-blue-700">
          5 colonne
        </div>
        <div
          class="col-start-12 col-span-1 border border-solid border-blue-700"
        >
          1 colonne
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline";

export default {
  name: "HeroSection",
  components: {
    Headline,
  },
};
</script>
