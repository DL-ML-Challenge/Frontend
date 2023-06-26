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
      <b-button
        class="phase-button"
        :style="{
          border: this.phase !== '1'? `1px solid ${phaseColor('1')}`: 0,
          background: this.phase === '1'? phaseColor('1') : 'transparent',
          fontSize: '1.5rem'
        }"
        @click.prevent="phase = '1'"
      >
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">ONE</span>
      </b-button>
      <b-button
        class="phase-button"
        :style="{
          border: this.phase !== '2'? `1px solid ${phaseColor('2')}`: 0,
          background: this.phase === '2'? phaseColor('2') : 'transparent',
          fontSize: '1.5rem'
        }"
        :disabled="Number(currentPhase()) < 2"
        @click.prevent="phase = '2'"
      >
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">TWO</span>
      </b-button>
      <b-button
        class="phase-button"
        :style="{
          border: this.phase !== '3'? `1px solid ${phaseColor('3')}`: 0,
          background: this.phase === '3'? phaseColor('3') : 'transparent',
          fontSize: '1.5rem'
        }"
        :disabled="Number(currentPhase()) < 3"
        @click.prevent="phase = '3'"
      >
        <span class="font-weight-light">PHASE</span> <span class="font-weight-bold">THREE</span>
      </b-button>
    </div>
    <div class="page-header topic-button-container mt-3">
      <b-button
        v-for="(topicText, i) in challenges"
        :key="i"
        :class="{'topic-button': true, 'enabled': chosenTopic === i, 'disabled': chosenTopic !== i, 'text-uppercase': true}"
        @click.prevent="chosenTopic = i"
      >
        {{ topicText }}
      </b-button>
    </div>
    <div class="page-container">
      <div class="submit-box" v-if="ongoingChallenge()">
        <SubmitBox :challenge-name="chosenChallengeName" :phase="phase" @submitted="refreshSubmissionList" />
      </div>
      <div class="mt-5">
        <SubmissionList ref="submissionList" :challenge-name="chosenChallengeName" :phase="phase" />
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
    let chosenTopic
    if (this.$route.query.name) {
      chosenTopic = this.nameToTopic(this.$route.query.name)
      this.$router.replace({ query: { ...this.$route.query, name: this.challengeName(chosenTopic) } })
    } else {
      chosenTopic = 0
    }
    let phase
    if (this.$route.query.phase) {
      phase = this.nameToTopic(this.$route.query.phase)
      if (!['1', '2', '3'].includes(phase)) {
        phase = this.currentPhase()
        this.$router.replace({ query: { ...this.$route.query, phase } })
      }
    } else {
      phase = this.currentPhase()
    }
    return {
      chosenTopic,
      chosenChallengeName: this.challengeName(chosenTopic),
      phase,
      phases: []
    }
  },
  computed: {
    challenges () {
      return this.phases.filter(phase => this.phase === phase.name).map(phase => phase.challenge_name)
    }
  },
  watch: {
    chosenTopic (n, o) {
      this.chosenChallengeName = this.challengeName(n)
      this.$router.replace({ query: { ...this.$route.query, name: this.chosenChallengeName } })
    },
    phases (n, o) {
      this.checkChosenTopic()
    },
    phase (n, o) {
      this.$router.replace({ query: { ...this.$route.query, phase: n } }).then(
        () => this.checkChosenTopic()
      )
    }
  },
  created () {
    this.fetchPhases()
  },
  methods: {
    checkChosenTopic () {
      if (!this.challenges.includes(this.chosenChallengeName)) {
        this.chosenTopic = 0
      } else {
        this.chosenTopic = this.challenges.indexOf(this.chosenChallengeName)
      }
    },
    logout () {
      this.$store.commit('token/unset')
      this.$router.push('/')
    },
    challengeName (topic) {
      if (topic === 0) {
        return 'vision'
      } else if (topic === 1) {
        return 'nlp'
      } else {
        return 'ml'
      }
    },
    nameToTopic (name) {
      let topic = {
        vision: 0,
        nlp: 1,
        ml: 2
      }[name]
      if (topic === undefined) {
        topic = 0
      }
      return topic
    },
    currentPhase () {
      return '2'
    },
    refreshSubmissionList () {
      this.$refs.submissionList.fetchSubmissions(this.chosenChallengeName, this.phase)
    },
    fetchPhases () {
      this.$axios.get('phase/', {
        headers: {
          Authorization: this.$store.state.token.token
        }
      })
        .then((response) => {
          this.phases = response.data.results
        })
        .catch((_) => {
          this.$router.replace('/dashboard')
        })
    },
    ongoingChallenge () {
      for (const phase of this.phases) {
        if (phase.challenge_name === this.chosenChallengeName && phase.name === this.phase) {
          return phase.is_ongoing
        }
      }
      return false
    },
    phaseColor (phase) {
      return {
        1: '#510A8A',
        2: '#141988',
        3: '#730061'
      }[phase]
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
  height: 10vh;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  color: white;
}

.main-page.main-container {
  min-height: 100vh;
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
  font-size: 1.5rem;
}

.phase1 {
  background: transparent;
  border: 1px solid #510A8A;
}

.phase2 {
  background: #141988;
  border: 0;
}

.phase3 {
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

.page-container > .submit-box {
  margin-top: 2rem;
  width: 100%;
  height: 15rem;
}
</style>
