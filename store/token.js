export const state = () => ({
  token: ''
})

export const mutations = {
  set (state, token) {
    state.token = 'Token ' + token
  },
  unset (state) {
    state.token = ''
  }
}

export const getters = {
  isLoggedIn (state) {
    return !(!state.token || state.token === '')
  }
}
