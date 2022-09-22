const { ref, computed } = require("vue");

// let a = ref(1);
// let b = ref(2);
//
// let c = computed(() => a.value + b.value);
// console.log(c.value);
// a.value = 10;
// console.log(c.value);

// let name = ref("Boris");
// let title = computed(() => name.value + " the Great");
// console.log(title.value);
// name.value = "Peter";
// console.log(title.value);

const person = ref({
  name: "Boris",
});

const title = computed(() => person.value.name + " the Great");
console.log(title.value);

person.value.name = "Peter";
console.log(title.value);
