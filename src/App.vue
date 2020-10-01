<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  #app {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
  }
  body {
    background: #121215;
    box-sizing: border-box;
  }
  .d-flex {
    display: flex;
  }
  .align-items-center {
    align-items: center !important;
  }
  .align-items-start {
    align-items: start !important;
  }
  .align-items-end {
    align-items: end !important;
  }
  .justify-content-center {
    justify-content: center !important;
  }
  .justify-content-start {
    justify-content: start !important;
  }
  .justify-content-end {
    justify-content: end !important;
  }
  .justify-content-between {
    justify-content: space-between !important;
  }
  .mt-4 {
    margin-top: 4px !important;
  }
  .mt-8 {
    margin-top: 8px !important;
  }
  .mt-16 {
    margin-top: 16px !important;
  }
  .mt-24 {
    margin-top: 24px !important;
  }
  .mt-32 {
    margin-top: 32px !important;
  }
  .mr-64 {
    margin-right: 64px;
  }
  .mb-48 {
    margin-bottom: 48px;
  }
  .mt-100 {
    margin-top: 100px;
  }
  .mr-24 {
    margin-right: 24px;
  }
  .px-110 {
    padding-left: 321px;
    padding-right: 321px;
  }
  .py-64{
    padding-top: 64px;
    padding-bottom: 64px;
  }
  .mt-150 {
    margin-top: 90px;
  }
  .w-60 {
    width: 60%;
  }
  .w-40 {
    width: 40%;
  }
  .pl-32 {
    padding-left: 32px;
  }
  .mt-200 {
    margin-top: 200px;
  }
  .mt-48 {
    margin-top: 48px;
  }
  @media screen and (max-width: 1820px){
    .px-110 {
      padding-left: 200px;
      padding-right: 200px;
    }
  }
  @media screen and (max-width: 1550px){
    .px-110 {
      padding-left: 110px;
      padding-right: 110px;
    }
  }
  @media screen and (max-width: 1400px){
    .px-110 {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  @media screen and (max-width: 1024px){
    .px-110 {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
</style>
