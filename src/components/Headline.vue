<template>
  <section>
    <h1>{{ action }} pour tous</h1>
    <h2>Trouvez votre prochain emploi chez Career Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      action: "Créé",
      interval: null,
    };
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
        const actions = ["Créé", "Conçu", "Développé"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 3;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>
