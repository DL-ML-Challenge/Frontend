export default function ({ store, redirect, route }) {
  console.log(route)
  if (!store.getters['token/isLoggedIn'] && route.name !== 'index') {
    return redirect('/')
  }
}
