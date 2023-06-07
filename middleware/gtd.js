export default function ({ store, redirect }) {
  if (store.getters['token/isLoggedIn']) {
    return redirect('/dashboard')
  }
}
