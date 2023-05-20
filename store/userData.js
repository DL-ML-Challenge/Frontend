export const state = () => ({
  username: '',
  teamName: ''
})

export const mutations = {
  setUsername (state, username) {
    state.username = username
  },
  setTeamName (state, teamName) {
    state.teamName = teamName
  }
}
