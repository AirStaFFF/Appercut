<template>
  <div class="apps px-110" id="projects">
    <main-title
      :text="'What we do?'"/>
    <discription
      :max-width="700"
      :discription="'Non-trivial personalized interfaces, mobile and web applications with thoughtful interaction, no templates and ready-made decisions'"/>
    <app
      v-for="(app, id) in apps"
      :key="id"
      :app="app"/>
  </div>
</template>

<script>
  import MainTitle from '@/components/MainTitle';
  import Discription from '@/components/Discription';
  import App from '@/views/MainPage/components/App';
  import { mapState } from 'vuex';
  export default {
    name: "Apps",
    components: {
      App,
      MainTitle,
      Discription
    },
    computed: {
      ...mapState('mainpage', ['apps'])
    }
  }
</script>

<style lang="scss">
</style>