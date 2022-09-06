<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-col-12">
        <div class="col-start-1 col-span-1 border border-solid border-blue-700">
          1 colonne
        </div>
        <div class="col-start-2 col-span-5 border border-solid border-blue-700">
          5 colonne
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
export default {
  name: "HeroSection",
  beforeCreate() {
    console.log("component is about to be created");
  },
  created() {
    console.log("component has been created");
  },
  beforeMount() {
    console.log("component is about to be mounted");
  },
  mounted() {
    console.log("component has been mounted in the DOM");
  },
};
</script>
