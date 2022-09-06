<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import HeroSection from "@/components/HeroSection";

export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
