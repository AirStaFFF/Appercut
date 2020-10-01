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
  @media screen and (max-width: 1024px){
    .main-title {
      font-size: 68px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px){
    .main-title {
      font-size: 48px;
    }
  }
</style>