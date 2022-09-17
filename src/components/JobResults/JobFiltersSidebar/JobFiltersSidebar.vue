<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">Que voulez-vous faire ?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Effacer les filtres" type="secondary" />
        </div>
      </div>
      <accordion />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton";
import Accordion from "@/components/Shared/Accordion";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
  },
};
</script>
