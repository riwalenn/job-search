<template>
  <img alt="" :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://i.pinimg.com/originals/ab/5d/e0/ab5de0df53da6094b6b322360ca4d424.png",
    };
  },
};
</script>
