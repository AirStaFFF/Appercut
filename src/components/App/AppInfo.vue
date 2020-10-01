<template>
  <div class="w-40 pl-32">
    <div class="app-info">
      <h1 class="app-info-title">
        {{app.title}}
      </h1>
      <p class="app-info-platforms d-flex align-items-center mt-32">
      <span
        v-for="(platform, id) in app.platforms"
        class="d-flex align-items-center"
        :key="id">
        <span class="mr-24" :class="{number: id === 0}">{{platform}}</span>
        <v-ellipse class="mr-24" v-if="id !== app.platforms.length-1"/>
      </span>
      </p>
      <p class="app-info-text mt-32">
        {{app.discription}}
      </p>
      <template v-if="app.isActive">
        <div class="d-flex align-items-center justify-content-between">
          <p class="app-info-link mt-32 mb-48">
            <a :href="app.link" target="_blank" class="gradient">Read more <arrow class="ml-2"/></a>
          </p>
          <a
            target="_blank"
            class="mt-32"
            :href="app.link">
            <img src="@/assets/images/app-store.png" class="app-info-link_img" alt="">
          </a>
        </div>
        <dots class="dost"/>
        <div class="sqr-block mt-32">

          <img
            :src="app.sqr"
            class="sqr-img">
          <div>
            <a :href="app.link" target="_blank" class="sqr-link gradient">Download on the App Store</a>
            <span class="sqr-platform">iOS</span>
          </div>
        </div>
      </template>
      <template v-else>
       <p class="mt-32">
         <a class="app-info-link  mb-48 gradient">
           Coming soon
         </a>
       </p>
      </template>
    </div>
  </div>
</template>

<script>
  import Dots from '@/assets/icons/Dots';
  import VEllipse from '@/assets/icons/Ellipse';
  import Arrow from '@/assets/icons/Arrow';
  export default {
    props: ['app'],
    name: "AppInfo",
    components: {
      VEllipse,
      Dots,
      Arrow
    }
  }
</script>

<style lang="scss">
  .ml-2 {
    margin-left: 8px;
  }
  .app-info {
    font-family: 'Raleway', sans-serif;
    max-width: 599px;
    width: 100%;
    &-title {
      font-family: 'Roboto', sans-serif;
      font-size: 48px;
      font-weight: bold;
      color: #ffffff;
    }
    &-platforms {
      font-family: 'Raleway', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.75;
      color: #a5a9b7;
    }
    &-text {
      font-size: 16px;
      line-height: 1.75;
      color: #ffffff;
      max-width: 456px;
    }
    &-link {
      a {

      }
    }
    .sqr-block {
      display: flex;
      align-items: start;
      .sqr-img {
        width: 67px;
        height: 66.9px;
        margin-right: 24px;
      }
      .sqr-link {
        display: block;
        max-width: 124px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
      }
      .sqr-platform {
        display: block;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        margin-top: 9px;
      }
    }
    .gradient {
      background-image: linear-gradient(to left, #ff307a, #b845ff);
      font-family: 'Roboto', sans-serif;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .app-info-link_img {
      display: none;
    }
  }
  @media screen and (max-width: 1024px){
    .sqr-block {
      display: none !important;
    }
    .dost {
      display: none;
    }
    .app-info-link {
      margin-bottom: 0 !important;
    }
    .app-info-link_img {
      display: block !important;
      width: 119.7px;
      height: 40px;
    }
  }
  @media screen and (max-width: 568px){
    .app-info-title {
      font-size: 34px !important;
    }
  }
</style>