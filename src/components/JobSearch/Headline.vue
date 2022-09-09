<template>
  <section>
    <h1
      data-test="action-phrase"
      class="font-bold -tracking-hero-h1 text-8xl leading- mb-14"
    >
      <span :class="['leading-17', actionClasses]">
        {{ action }}
      </span>
      <br />
      <span class="leading-17"> for everyone</span>
    </h1>
    <h2
      class="text-3l leading-9 -tracking-hero-h2 font-normal font-light mb-15"
    >
      Trouvez votre prochain job chez Career Corp.
    </h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        build: this.action === "Build",
        create: this.action === "Create",
        design: this.action === "Design",
        code: this.action === "Code",
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
