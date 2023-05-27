export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
  })

  $axios.onResponse((response) => {
  })

  $axios.onError((error) => {
    if (error.response.status === 401) {
      store.commit('token/unset')
      redirect('/')
      return
    }
    throw error
  })
}
