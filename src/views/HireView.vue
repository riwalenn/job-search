<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Nous rejoindre</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light"></h2>
    </template>
  </header-container>
  <main class="flex flex-col h-screen">
    <div>
      <div class="m-auto w-max px-0 w-auto">
        <div class="mb-10">
          <div class="grid">
            <div class="block col-end-auto">
              <picture>
                <img
                  class="h-96 w-max block mx-auto object-contain"
                  src="https://careers.google.com/jobs/dist/img/assets/hero_1x.8a69262ba100bad42a0e3f7520dc7ab1.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
export default defineComponent({
  name: "HireView",
  components: {
    HeaderContainer,
  },
});
</script>
