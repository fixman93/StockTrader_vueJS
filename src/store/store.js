import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './mules/portfolio'

Vue.use(Vuex)

  export default new Vuex.Store({
    modules: {
      stocks, //ES6
      portfolio: portfolio //ES5
    }
  })
