<template>
  <div class="contact_us px-110 mt-200" id="contact">
    <main-title
      class="w-50"
      :text="'Contact us'" v-if="!hideForm"/>
    <contact-success v-if="hideForm"/>
    <contact-form
      v-else
      @show-success="hideForm = true"
      class="w-50"/>
  </div>
</template>

<script>
  import ContactForm from '@/views/MainPage/components/ContactForm'
  import MainTitle from '@/components/MainTitle';
  import ContactSuccess from '@/views/MainPage/components/ContactSuccess';
  export default {
    name: "ContactUs",
    components: {
      ContactForm,
      MainTitle,
      ContactSuccess
    },
    data() {
      return {
       hideForm: false
      }
    }
  }
</script>

<style lang="scss">
  .contact_us {
    display: flex;
  }
  .w-50 {
    width: 50%;
  }
  @media screen and (max-width: 1024px){
    .contact_us {
      flex-wrap: wrap;
      .w-50 {
        width: 100%;
      }
      &.mt-200 {
        margin-top: 100px !important;
      }
    }
  }
</style>