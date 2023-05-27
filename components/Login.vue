<template>
  <div class="login main-container">
    <div class="login-header-container">
      LOGIN
    </div>
    <form @submit.prevent="login()">
      <div class="login-stn-container">
        <label>STUDENT NUMBER OR EMAIL</label>
        <input
          id="username"
          v-model="loginData.username"
          type="text"
          class="login-input"
          placeholder="99123456"
          name="username"
        >
      </div>
      <div class="login-nc-container">
        <label>NATIONAL NUMBER</label>
        <input
          v-model="loginData.password"
          type="password"
          class="login-input"
          placeholder="0123456789"
          name="password"
        >
      </div>
      <b-button variant="outline-secondary" class="button" type="submit">
        <div v-if="!loading">
          LOGIN
        </div>
        <b-spinner v-else />
      </b-button>
    </form>
    <div v-if="loginSuccessful" class="successful login-message">
      <ul>
        <li>
          LOGIN SUCCESSFUL
        </li>
      </ul>
    </div>
    <div v-if="loginFailed" class="failed login-message">
      <ul>
        <li>
          LOGIN FAILED
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data () {
    return {
      loginData: {
        username: undefined,
        password: undefined
      },
      loading: false,
      loginSuccessful: false,
      loginFailed: false
    }
  },
  methods: {
    login () {
      this.loading = true
      this.loginSuccessful = false
      this.loginFailed = false
      this.$axios.post(
        'login/',
        this.loginData
      )
        .then((response) => {
          this.loginSuccessful = true
          this.$store.commit('token/set', response.data.token)
          this.$router.push('/dashboard')
        })
        .catch(() => {
          this.loginFailed = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.login.main-container {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/backgrounds/Login.svg#svgView(preserveAspectRatio(none))");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-left: 5%;
  padding-top: 10%;
  padding-right: 60%;
}

.login-header-container {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  margin-bottom: 3%;
  font-weight: 700;
}

.login .login-input {
  border-radius: 24px;
  background: transparent;
  width: 100%;
  border: 1px solid black;
  padding: 0.5rem 0 0.5rem 5%;
}

.login .login-input:focus {
  border: 1px solid black;
  outline: 1px solid green;
}

.login .login-input {
  font-weight: 300;
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  font-style: italic;
  letter-spacing: 0.1rem;
}

.login label {
  font-family: Inter, sans-serif;
  font-weight: 200;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
}

.login-stn-container {
  margin-top: 3rem;
}

.login-nc-container {
  margin-top: 2rem;
}

.login .button {
  margin-top: 7%;
  width: 100%;
  border-radius: 32px;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  border-color: black;
  letter-spacing: 0.2em;
  color: white;
  background: black;
}

.login .button:hover {
  background: black;
  color: white;
}

.login-message {
  background: rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  font-family: Inter, sans-serif;
  font-weight: 700;
  letter-spacing: 0.1rem;
  border-radius: 24px;
  padding: 1.5% 0 1.5% 0;
}

.successful.login-message {
  color: green;
  border: 1px solid green;
}

.failed.login-message {
  color: red;
  border: 1px solid red;
}

.login-message > ul {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
}
</style>
