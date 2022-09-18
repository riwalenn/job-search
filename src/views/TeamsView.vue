<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Equipe</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here, why don't you come join us ?
      </h2>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
