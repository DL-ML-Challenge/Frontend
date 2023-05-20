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
