<template>
  <div class="contact-success">
    <h1 class="contact-success-title">
      SUCCESS
    </h1>
    <div class="border-success">
      <check/>
    </div>
    <p class="contact-success-discription">
      We will contact with you as soon as possible
    </p>
  </div>
</template>

<script>
  import Check from '@/assets/icons/Check';
  export default {
    name: "ContactSuccess",
    components: {Check}
  }
</script>


<style lang="scss">
  //font-family: 'Roboto', sans-serif;
  //font-family: 'Raleway', sans-serif;
  .contact-success {
    color: #fff;
    padding: 24px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    &-title {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 48px;
    }
    &-discription {
      font-family: 'Raleway', sans-serif;
      font-size: 16px;
      margin: 16px 0 0 0;
      text-align: center;
    }
    .border-success {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 32px auto;
      height: 120px;
      width: 120px;
      border: 1px solid #07d502;
      border-radius: 50%;
      svg {
        width: 50px;
        height: 50px;
        color: #07d502;
      }
    }
  }
</style>