<template>
  <button
    class="main-button mt-100"
    type="submit"
    @click="handleClick">
    <img src="@/assets/images/bell.png" alt="" v-if="img">
    {{text}}
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: ['text', 'img'],
    methods: {
      handleClick() {
        this.$emit('on-button-click')
      }
    }
  }
</script>

<style lang="scss">
  .main-button {
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    width: 240px;
    height: 60px;
    background-image: linear-gradient(to left, #ff307a, #b845ff);
    border: none;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.74;
    letter-spacing: normal;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      height: 30px;
      margin-right: 24px;
    }
  }
</style>