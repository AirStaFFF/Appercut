<template>
  <div class="header" id="about">
    <navbar/>
    <div class="d-flex header-content px-110">
      <div class="w-40">
        <div class="mt-150">
          <main-title
            :text="'APPERCUT'"/>
          <h2 class="header-content-pre-disc mb-48">Applications development</h2>
          <discription
            :max-width="383"
            :discription="'A team of high-quality researchers, designers and developers have joined forces to create quality products'"/>
          <main-button
            v-scroll-to="'#contact'"
            class="desc-btn"
            :img="true"
            :text="'Contact Us'"/>
        </div>
      </div>
      <div class="w-60 d-flex justify-content-center">
        <div class="img_bl">
          <img src="@/assets/images/cyber-phone-hand-3-1.png" class='header-main_img'>
        </div>
      </div>
      <main-button
        v-scroll-to="'#contact'"
        class="mob-btn"
        :img="true"
        :text="'Contact Us'"/>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/views/MainPage/components/Navbar';
  import MainTitle from '@/components/MainTitle';
  import Discription from '@/components/Discription';
  import MainButton from '@/components/MainButton';
  export default {
    name: "Header",
    components: { Navbar, MainTitle, Discription, MainButton }
  }
</script>

<style lang="scss">
  .header {
    font-family: 'Raleway', sans-serif;
    margin-bottom: 85px;
    &-content {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .header-main_img {
        width: 100%;
        display: block;
        max-width: 714px;
      }
    }
    &-content-pre-disc {
      font-weight: normal;
      font-size: 24px;
      color: #ffffff;
    }
    .header-main_img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .mob-btn {
      display: none;
    }
    .w-60 {
      object-fit: contain;
      mix-blend-mode: exclusion;
      display: flex;
      justify-content: center;
      .img_bl {
        width: 100%;
        display: block;
        margin-right: -200px;
      }
    }
  }
  @media screen and (max-width: 1024px){
    .header {
      &-content {
        margin-top: 0 !important;
        flex-wrap: wrap;
        .w-40 {
          width: 100%;
        }
        .w-60 {
          width: 100%;
          .img_bl {
            margin-right: -40px;
          }
          .header-main_img {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .mt-150 {
          margin-top: 16px !important;
        }
        .header-content-pre-disc {
          text-align: center;
          margin-bottom: 0 !important;
        }
        .header-main_img {
          max-width: 400px;
          margin-top: 45px;
          margin-right: -60px;
        }
        .desc-btn {
          display: none;
        }
      }

      .mob-btn {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 55px !important;
      }
    }
  }
</style>