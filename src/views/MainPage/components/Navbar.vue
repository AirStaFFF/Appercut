<template>
   <div class="navbar d-flex align-items-center px-110 py-64">
     <div class="nav-logo mr-64">
       <img src="@/assets/images/logo-kulak.png" alt="">
     </div>
     <div class="nav-list d-flex align-items-center">
       <div class="nav-item mr-64">
         <a href="#" v-scroll-to="'#about'">About</a>
       </div>
       <div class="nav-item mr-64">
         <a href="#" v-scroll-to="'#projects'">Projects</a>
       </div>
       <div class="nav-item">
         <a href="#" v-scroll-to="'#contact'">Contact</a>
       </div>
     </div>
   </div>
</template>

<script>
  export default {
    name: "Navbar",
  }
</script>

<style lang="scss">
  //font-family: 'Roboto', sans-serif;
  //font-family: 'Raleway', sans-serif;
  //font-family: 'Nunito', sans-serif;
  .navbar {
    font-family: 'Roboto', sans-serif;
    .nav-logo {
      img {
        width: 100%;
        height: 26.5px;
        display: block;
        max-width: 32px;
      }
    }
    .nav-list {
      .nav-item {
        a {
          font-size: 16px;
          line-height: 1.74;
          color: #ffffff;
          text-decoration: none;
          &:hover {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    .navbar {
      &.py-64 {
        padding-top: 32px;
        padding-bottom: 16px;
      }
      .nav-list {
        display: none;
      }
      .nav-logo {
        margin-right: auto;
        margin-left: auto;
        img {
          max-width: 48px;
          height: 39.7px;
        }
      }
    }
  }
</style>