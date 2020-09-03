<template>
  <button
    class="main-button"
    @click="handleClick">
    {{text}}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: ['text'],
    methods: {
      handleClick() {
        this.$emit('on-button-click')
      }
    }
  }
</script>

<style lang="scss">
  .main-button {
    width: 240px;
    height: 60px;
    background-image: linear-gradient(to top, #ff307a, #b845ff);
  }
</style>