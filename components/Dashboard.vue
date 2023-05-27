<template>
  <div class="main-page main-container">
    <div class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="item">
            <div class="item-name">
              <div class="mlc-logo">
                <MLCLogo />
              </div>
            </div>
          </li>
          <li class="item ml-auto">
            <div class="item-name logout" @click.prevent="logout()">
              Logout
            </div>
            <div />
          </li>
          <li class="item">
            <div class="item-name">
              Dashboard
            </div>
            <div class="main-page dot">
              <Dot />
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-header">
      DASHBOARD
    </div>
    <div class="page-container">
      <div class="section">
        <Submit />
      </div>
      <div class="section">
        <MyInfo />
      </div>
      <div class="section">
        <Phase1 />
      </div>
      <div class="section">
        <Ranking />
      </div>
    </div>
  </div>
</template>

<script>

import MLCLogo from './MLCLogo.vue'
import Dot from './Dot.vue'
import Submit from './dashboard/Submit.vue'
import MyInfo from './dashboard/MyInfo.vue'
import Phase1 from './dashboard/Phase1.vue'
import Ranking from './dashboard/Ranking.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: { Ranking, Phase1, MyInfo, Submit, Dot, MLCLogo },
  mounted () {
    this.$axios.get('user/', {
      headers: {
        Authorization: this.$store.state.token.token
      }
    })
      .then((response) => {
        this.$store.commit('userData/setUsername', response.data.full_name)
        this.$store.commit('userData/setTeamName', response.data.group_name)
      })
  },
  methods: {
    logout () {
      this.$store.commit('token/unset')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.header {
  font-family: "Inter", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: 2px;
  height: 10%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  color: white;
}

.main-page.main-container {
  height: 100vh;
  background-color: black;
  padding: 0 10% 6.7% 10%;
}

.nav {
  padding: 0 5%;
  width: 100%;
  height: 100%;
}

.nav-list {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  list-style: none;
  padding: 0;
}

.nav-list li {
  margin-right: 20px;
}

.header .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}

.item-name > .mlc-logo {
  width: 2.5rem;
}

.main-page.dot {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 0.5rem;
  height: 0.5rem;
}

.page-container {
  margin-top: 3rem;
  position: relative;
  height: 80%;
  overflow: hidden;
  display: grid;
  grid-row: auto auto;
  grid-template-columns: 49% 49%;
  grid-template-rows: 48% 48%;
  row-gap: 4%;
  column-gap: 2%;
}

.section {
}

.item-name.logout {
  color: #FF9999;
}

.item-name.logout:hover {
  cursor: pointer;
}

.page-header {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.4rem;
  margin-left: 4rem;
  color: white;
}
</style>
