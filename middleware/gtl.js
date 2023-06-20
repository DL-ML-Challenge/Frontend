export default function ({ store, redirect, route }) {
  if (!store.getters['token/isLoggedIn'] && route.name !== 'index') {
    return redirect('/')
  }
}
