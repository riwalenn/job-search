<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        Ensemble, nous créons un accès à l'information et créons des produits
        qui améliorent la vie des gens.<br />
        Souhaitez-vous rejoindre l'équipe de Fake Careers project ?
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
