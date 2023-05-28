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
            <div class="item-name hover-pointer" @click.prevent="$router.push('/dashboard')">
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
      <b-button class="phase-button phase1">
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">ONE</span>
      </b-button>
      <b-button class="phase-button phase2" disabled>
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">TWO</span>
      </b-button>
      <b-button class="phase-button phase3" disabled>
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">THREE</span>
      </b-button>
    </div>
    <div class="page-header topic-button-container mt-3">
      <b-button
        v-for="(topicText, i) in ['VISION', 'NLP']"
        :key="i"
        :class="{'topic-button': true, 'enabled': chosenTopic === i, 'disabled': chosenTopic !== i}"
        @click.prevent="chosenTopic = i"
      >
        {{ topicText }}
      </b-button>
    </div>
    <div class="page-container">
      <div><SubmitBox /></div>
      <div class="mt-5">
        <SubmissionList />
      </div>
    </div>
  </div>
</template>

<script>
import MLCLogo from './MLCLogo.vue'
import Dot from './Dot.vue'
import SubmitBox from './submissions/SubmitBox.vue'
import SubmissionList from './submissions/SubmissionList.vue'

export default {
  name: 'SubmissionsPage',
  components: { SubmissionList, SubmitBox, Dot, MLCLogo },
  data () {
    return {
      chosenTopic: 0
    }
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

.hover-pointer:hover {
  cursor: pointer;
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
  color: white;
}

.phase-button {
  font-family: "Avenir Next LT Pro", sans-serif;
  color: #D9D9D9;
  border-radius: 52px;
  padding-right: 3%;
  padding-left: 3%;
  letter-spacing: 0.2rem;
}

.phase1 {
  font-size: 2rem;
  background: #510A8A;
  border: 0;
}

.phase2 {
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid #141988;
}

.phase3 {
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid #730061;
}

.page-header.topic-button-container {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

.topic-button {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 44px;
  padding-right: 3%;
  padding-left: 3%;
  letter-spacing: 0.2rem;
}

.topic-button.enabled {
  background: #D9D9D9;
  color: black;
}

.topic-button.disabled {
  background: transparent;
  border: 1px solid #D9D9D9;
}

.page-container {
  height: 20%;
}

.page-container > div {
  margin-top: 2rem;
  width: 100%;
  height: 15rem;
}
</style>
