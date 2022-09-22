const { ref, reactive, computed } = require("vue");
console.log("--- intro to computed : ");
let a = ref(1);
let b = ref(2);

let c = computed(() => a.value + b.value);
console.log(c.value);
a.value = 10;
console.log(c.value);

console.log("--- computed function : ");
let name = ref("Boris");
let title = computed(() => name.value + " the Great");
console.log(title.value);
name.value = "Peter";
console.log(title.value);

console.log("--- computed with object : ");
const person = ref({
  name: "Boris",
});

const title2 = computed(() => person.value.name + " the Great");
console.log(title2.value);

person.value.name = "Peter";
console.log(title2.value);

console.log("--- reactive function :");
const person2 = reactive({
  name: "Boris",
});

const title3 = computed(() => person2.name + " the Great");
console.log(title3.value);

person2.name = "Peter";
console.log(title3.value);

console.log("--- multiple properties on reactive object :");
const user = reactive({
  firstname: "Riwalenn",
  lastname: "Bas",
});
const titre = computed(() => `${user.firstname} ${user.lastname} the Great`);
const titleLength = computed(() => titre.value.length);
console.log(titre.value);
console.log(titleLength.value);

user.firstname = "Peter";
console.log(titre.value);
console.log(titleLength.value);
