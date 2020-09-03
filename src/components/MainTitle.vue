<template>
  <div class="main-title">
    {{text}}
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: ['text']
  }
</script>

<style lang="scss">

  .main-title {
    font-family: 'Roboto', sans-serif;
    font-size: 96px;
    font-weight: bold;
    color: #ffffff;
  }
</style>