import Vue from 'vue'
import Vuex from 'vuex'

import mainpage from './mainpage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainpage
  }
})
