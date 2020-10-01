<template>
  <div>
    <nav-dots/>
    <header-box/>
    <apps/>
    <contact-us/>
    <footer-box/>
  </div>
</template>
<script>
  import HeaderBox from '@/views/MainPage/components/Header';
  import Apps from '@/views/MainPage/components/Apps';
  import ContactUs from '@/views/MainPage/components/ContactUs';
  import FooterBox from '@/views/MainPage/components/Footer';
  import NavDots from '@/components/NavDots';
  export default {
    name: 'MainPage',
    components: {
      HeaderBox,
      Apps,
      ContactUs,
      FooterBox,
      NavDots
    }
  }
</script>

<style lang="scss">

</style>