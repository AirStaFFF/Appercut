<template>
  <div class="footer px-110">
    <div class="w-33">
      <div>
        <img src="@/assets/images/logo-square.png" class="logo-png" alt="">
        <span class="copy d-block mt-24">
        © Appercut sp z o o<br>
        All rights reserved.
      </span>
      </div>
    </div>
    <div class="w-33">
      <div>
        <span class="city d-block">Warsaw</span>
        <span class="text  d-block mt-23">
          <span class="number">00</span>-<span class="number">104</span>
          ul. Twarda
          <span class="number">18</span>
        </span>
        <span class="text d-block mt-25">PL<span class="number">5252783211</span></span>
      </div>
    </div>
    <div class="w-33">
      <div>
<!--        <span class="text d-block">+<span class="number">48 8800 55535 35</span></span>-->
        <span class="text d-block">contact@appercut.eu</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss">
  .w-33 {
    width: 33.3333%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .mt-23 {
    margin-top: 23px;
  }
  .mt-25 {
    margin-top: 25px;
  }
  .footer {
    margin-top: 246px;
    display: flex;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 60px;
    .logo-png {
      width: 65px;
      height: 65px;
    }
    .d-block {
      display: block;
    }
    .copy {
      font-size: 16px;
      line-height: 1.39;
      color: #a5a9b7;
    }
    .text {
      font-size: 16px;
      color: #ffffff;
    }
    .city {
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .number {
    font-family: 'Nunito', sans-serif;
  }
  @media screen and (max-width: 768px){
   .footer {
     margin-top: 128px;
     flex-wrap: wrap-reverse;
     .w-33 {
       width: 100%;
       text-align: center;
     }
     .city {
       margin-top: 64px;
     }
     .logo-png {
       margin-top: 64px;
     }
     .copy {
       margin-bottom: 30px;
     }
   }
  }
</style>