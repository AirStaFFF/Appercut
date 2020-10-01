<template>
  <div class="discription mt-24" :style="{maxWidth: maxWidth + 'px'}">
    {{discription}}
  </div>
</template>

<script>
  export default {
    name: "Discription",
    props: ['discription', 'maxWidth']
  }
</script>

<style lang="scss">
  .discription {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.74;
    color: #a5a9b7;
  }
  @media screen and (max-width: 1024px){
    .discription {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      display: block;
      .mt-24 {
        margin-top: 31px;
      }
    }
  }
</style>