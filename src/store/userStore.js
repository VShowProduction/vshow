import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoged: false,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
   authenticated(state){
    return !!state.user;
   }
  },

  actions: {
    setUser(state, userData){
        state.user = userData
    }
  }
})