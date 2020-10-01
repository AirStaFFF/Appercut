<template>
  <div class="nav-dots">
    <a
      href="#"
      v-scroll-to="dot.link"
      v-for="(dot) in dots"
      :key="dot.id"
      :class="{active: dot.active}"
      class="nav-dot"></a>
  </div>
</template>

<script>
  export default {
    name: "NavDots",
    data() {
      return {
        dots: [
          {active: false, id: 0, link: '#about'},
          {active: false, id: 1, link: '#projects'},
          {active: false, id: 2, link: '#contact'}
        ]
      }
    },
    mounted () {
      this.setActiveNavDot()
      window.addEventListener('scroll', this.setActiveNavDot);
    },
    destroy() {
      window.removeEventListener('scroll', this.setActiveNavDot)
    },
    methods: {
      setActiveNavDot() {
        const about = document.getElementById('about').clientHeight - 10
        const projects = document.getElementById('projects').clientHeight - 10
        const contact = document.getElementById('contact').clientHeight
        const scrollTop = window.pageYOffset
        const s = about + projects
        const c = about + projects + contact
        if(scrollTop < about) {
          this.dots[0].active = true
          this.dots[1].active = false
          this.dots[2].active = false
        } else if(scrollTop > about && scrollTop < s) {
          this.dots[0].active = false
          this.dots[1].active = true
          this.dots[2].active = false
        } else if(scrollTop > s && scrollTop < c) {
          this.dots[0].active = false
          this.dots[1].active = false
          this.dots[2].active = true
        } else if(scrollTop > c) {
          this.dots[0].active = false
          this.dots[1].active = false
          this.dots[2].active = true
        }

      }
    }
  }
</script>

<style lang="scss">
  .nav-dots {
    position: fixed;
    top: 50%;
    margin-top: -41px;
    right: 112px;
    z-index: 20202020;
    .nav-dot {
      display: block;
      margin-bottom: 24px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #ffffff;
      &.active {
        background-image: linear-gradient(to left, #ff307a, #b845ff);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (max-width: 1740px){
    .nav-dots {
      right: 80px;
    }
  }
  @media screen and (max-width: 1440px){
    .nav-dots {
      right: 41px;
    }
  }
  @media screen and (max-width: 1024px){
    .nav-dots {
      display: none;
    }
  }
</style>