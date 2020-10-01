<template>
  <form @submit.prevent="formSubmit" class="main-form">
    <div class="main-form-fields">
      <div>
        <span class="label">What is your name?*</span>
        <input
          :class="{errorBorder: findError('name')}"
          v-model="form.name"
          name="name"
          type="text"
          class="input">
      </div>
      <div class="mt-48">
        <span class="label">Email*</span>
        <input
          :class="{errorBorder: findError('email')}"
          v-model="form.email"
          name="email"
          type="email"
          class="input">
      </div>
      <div class="mt-48">
        <span class="label">Leave your comments here*</span>
        <textarea
          :class="{errorBorder: findError('comment')}"
          v-model="form.comment"
          name="comment"
          cols="30"
          rows="10"
          class="textarea">
        </textarea>
      </div>
    </div>
    <main-button
      :text="'Send'"/>
  </form>
</template>

<script>
  import MainButton from '@/components/MainButton';
  export default {
    name: "ContactForm",
    data() {
      return {
        errors: [],
        form: {
          name: '',
          email: '',
          comment: ''
        }
      }
    },
    components: {
      MainButton
    },
    watch: {
      'form.name': function (name) {
        if(this.findError('name') && name) {
          const index = this.errors.findIndex(e => e.value === 'name')
          this.errors.splice(index, 1)
        }
      },
      'form.email': function (email) {
        if(this.findError('email') && this.validEmail(email) && email) {
          const index = this.errors.findIndex(e => e.value === 'email')
          this.errors.splice(index, 1)
        }
      },
      'form.comment': function (comment) {
        if(this.findError('comment') && comment) {
          const index = this.errors.findIndex(e => e.value === 'comment')
          this.errors.splice(index, 1)
        }
      }
    },
    methods: {
      findError(type) {
        if(this.errors.length) {
          const text = this.errors.find(e => e.value === type)
          if(text){
            return true
          } else return false
        } return false
      },
      formSubmit(e) {
        e.preventDefault();
        if(!this.checkForm(e)) {
          return
        }
        let currentObj = this;
        const location = window.location.href.split('#').shift()
        this.axios.post(`${location}send.php`, {
          name: this.form.name,
          email: this.form.email,
          comment: this.form.comment,
        })
        .then(function (response) {
          currentObj.output = response.data;
          this.form = {
            name: '',
            email: '',
            comment: ''
          }
          currentObj.$emit('show-success')
        })
        .catch(function (error) {
          currentObj.error = error;
        });
      },
      checkForm: function (e) {
        this.errors = [];
        if (!this.form.name) {
          this.errors.push({text: "Name required.", value: 'name'});
        }
        if (!this.form.comment) {
          this.errors.push({text: 'Comment required.', value: 'comment'});
        }
        if (!this.form.email) {
          this.errors.push({text: 'Email required.', value: 'email'});
        } else if (!this.validEmail(this.form.email)) {
          this.errors.push({text:'Valid email required.', value: 'email'});
        }
        if (!this.errors.length) {
          return true;
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>

<style lang="scss">
  .main-form {
    display: flex;
    flex-wrap: wrap;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    .main-form-fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      div {
        max-width: 1000px;
        width: 100%;
      }
    }
    .label {
      width: 100%;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.74;
      letter-spacing: normal;
      color: #a5a9b7;
    }
    input, textarea {
      margin-top: 16px;
      max-width: 1000px;
      border: none;
      width: 100%;
      background-color: rgba(#a5a9b7, 0.16);
      font-size: 24px;
      color: #fff;
      padding: 6px;
    }
    .input {
      height: 48px;
    }
    .textarea {
      height: 142px;
    }
  }
  .error {
    color: red;
    text-align: right;
    font-size: 16px;
    width: 100%;
  }
  .errorBorder {
    border:1px solid #ff237c !important;
  }
  @media screen and (max-width: 1024px){
    .main-form {
      margin-top: 64px;
      .main-form-fields {
        div {
          max-width: 768px;
        }
      }
    }
  }
</style>