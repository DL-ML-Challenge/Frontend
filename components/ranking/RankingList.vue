<template>
  <div class="line">
    <div class="line">
      <div class="line">
        <div class="line last">
          <div class="line-title">
            ranking
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
          <div class="page-header topic-button-container mt-2">
            <b-button
              v-for="(topicText, i) in ['VISION', 'NLP']"
              :key="i"
              :class="{'topic-button': true, 'enabled': chosenTopic === i, 'disabled': chosenTopic !== i}"
              @click.prevent="chosenTopic = i"
            >
              {{ topicText }}
            </b-button>
          </div>
          <RankingTable :challenge-name="chosenChallengeName" :phase="phase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RankingTable from './RankingTable.vue'

export default {
  name: 'RankingList',
  components: { RankingTable },
  data () {
    let chosenTopic
    if (this.$route.query.name) {
      chosenTopic = this.nameToTopic(this.$route.query.name)
      this.$router.replace({ query: { ...this.$route.query, name: this.challengeName(chosenTopic) } })
    } else {
      chosenTopic = 0
    }
    return {
      chosenTopic,
      chosenChallengeName: this.challengeName(chosenTopic),
      phase: '1',
      ranking: []
    }
  },
  watch: {
    chosenTopic (newTopic, oldTopic) {
      this.chosenChallengeName = this.challengeName(newTopic)
      this.$router.replace({ query: { ...this.$route.query, name: this.chosenChallengeName } })
    }
  },
  methods: {
    challengeName (topic) {
      if (topic === 0) {
        return 'vision'
      } else {
        return 'nlp'
      }
    },
    nameToTopic (name) {
      let topic = {
        vision: 0,
        nlp: 1
      }[name]
      if (topic === undefined) {
        topic = 0
      }
      return topic
    }
  }
}
</script>

<style scoped>
.line {
  padding: 0.3rem;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 15px solid black;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.line.last {
  position: relative;
  padding: 2% 2% 2%;
}

.line-title {
  position: absolute;
  top: -2.5rem;
  width: fit-content;
  left: 10%;
  background: black;
  color: #D9D9D9;
  padding: 0 2% 0 2%;
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
}

.page-header {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.4rem;
  color: white;
  margin-left: 3rem;
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
  font-size: 1rem;
  background: #D9D9D9;
  color: black;
  border: 0;
}

.phase2 {
  font-size: 1rem;
  background: transparent;
}

.phase3 {
  font-size: 1rem;
  background: transparent;
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
</style>
