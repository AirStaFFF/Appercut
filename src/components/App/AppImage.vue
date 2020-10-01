<template>
  <div class="w-60">
    <div class="app-image">
      <img
        class="app-main-img"
        :src="app.mainImg" >
      <div class="app-image-info">
        <img
          v-if="app.icon"
          :src="app.icon"
          class="app-image-info-img">
        <p
          class="app-image-info-text mt-24">
          {{app.imgInfo}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppImage",
    props: ['app']
  }
</script>

<style lang="scss">
  .app-image {
    font-family: 'Raleway', sans-serif;
    position: relative;
    max-width: 700px;
    display: block;
    .app-main-img {
      width: 100%;
    }
    &-info {
      position: absolute;
      left: 38px;
      bottom: 64px;
      &-img {
        height: 64px;
        width: 64px;
        box-shadow: 0 2.3px 3.6px 0 rgba(0, 0, 0, 0.11);
        border-radius: 6.3px;
        display: flex;
      }
      &-text {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.75;
        color: #ffffff;
        max-width: 321px;
      }
    }
  }
  @media screen and (max-width: 568px){
    .app-image-info {
      left: 16px;
      bottom: 16px;
      &-text {
        margin-top: 16px !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.75;
        color: #ffffff;
        max-width: 125px;
      }
      &-img {
        width: 29px !important;
        height: 29px !important;
      }
    }
  }
</style>