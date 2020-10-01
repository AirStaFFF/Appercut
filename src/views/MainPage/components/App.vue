<template>
  <div class="app mt-150">
    <app-image :app="app"/>
    <app-info :app="app"/>
  </div>
</template>

<script>
  import AppImage from '@/components/App/AppImage';
  import AppInfo from '@/components/App/AppInfo';
  export default {
    name: "App",
    props: ['app'],
    components: {
      AppInfo,
      AppImage
    }
  }
</script>

<style lang="scss">
  .app {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  @media screen and (max-width: 1200px){
    .app {
      align-items: center;
    }
  }
  @media screen and (max-width: 1024px){
    .app {
      flex-wrap: wrap;
      justify-content: center;
      &.mt-150 {
        margin-top: 84px !important;
      }
      .w-60 {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .w-40 {
        display: flex;
        justify-content: center;
        width: 100%;
        &.pl-32 {
          padding-left: 0;
        }
        .app-info {
          margin-top: 32px;
          max-width: 700px;
        }
      }
    }
  }
</style>