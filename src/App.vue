<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav";
import HeroSection from "@/components/JobSearch/HeroSection";

export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
