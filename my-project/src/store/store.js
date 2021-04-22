import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchinx:'',
    count: 0,
    TabShowData:true
  },
  mutations: {
    increment (state) {
      state.count++
    },
    show(state){
      state.TabShowData = true;
    },
    hide(state){
      state.TabShowData = false;
    }
  }
    
  
})