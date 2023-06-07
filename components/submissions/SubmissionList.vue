<template>
  <div class="line">
    <div class="line">
      <div class="line">
        <div class="line last">
          <div class="line-title">
            submissions
          </div>
          <b-container class="submission-table">
            <b-row class="first-row">
              <b-col cols="1" />
              <b-col class="text-left ml-2">
                TIME
              </b-col>
              <b-col class="text-center">
                SCORE
              </b-col>
              <b-col class="text-right">
                DOWNLOAD
              </b-col>
            </b-row>
            <b-row v-for="(submission, i) in submissions" :key="i" class="custom-row">
              <b-col cols="1" class="text-center id">
                {{ i + 1 }}
              </b-col>
              <b-col class="text-left time ml-2">
                {{ submission.created_at | verboseDate }}
              </b-col>
              <b-col class="text-center score">
                <span v-if="isScoreJudged(submission.score)">{{ submission.score | roundScore }}</span>
                <span v-else>PENDING</span>
              </b-col>
              <b-col />
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SubmissionList',
  filters: {
    roundScore (score) {
      return Math.round(score * 100) / 100
    },
    verboseDate (date) {
      const diff = Math.trunc((Date.now() - new Date(date)) / 1000)
      const days = Math.trunc(diff / 60 / 60 / 24)
      const hours = Math.trunc((diff) % (60 * 60 * 24) / 60 / 60)
      const minutes = Math.trunc((diff % 360) / 60)
      let result = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0')
      if (days > 0) {
        result = days + ' Days ' + result
      }
      return result
    }
  },
  props: [
    'challengeName',
    'phase'
  ],
  data () {
    return {
      submissions: []
    }
  },
  watch: {
    challengeName (n, o) {
      this.fetchSubmissions(n, this.phase)
    },
    phase (n, o) {
      this.fetchSubmissions(this.challengeName, o)
    }
  },
  created () {
    this.fetchSubmissions(this.challengeName, this.phase)
  },
  methods: {
    isScoreJudged (score) {
      console.log(score)
      return score !== null && Math.trunc(score) !== -1
    },
    fetchSubmissions (challengeName, phase) {
      this.$axios.get(
        '/' + challengeName + '/' + phase + '/submit/',
        {
          headers: {
            Authorization: this.$store.state.token.token
          }
        }
      )
        .then((response) => {
          this.submissions = response.data.results
        })
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
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}

.line-title {
  position: relative;
  top: -3rem;
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

.submission-table {
  font-family: "Avenir Next LT Pro", sans-serif;
  width: 90%;
  max-width: none;
}

.submission-table > .first-row {
  font-size: 1rem;
  color: white;
  font-weight: 300;
}

.submission-table > .custom-row {
  background: #D9D9D9;
  margin-top: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 12px;
}

.custom-row > .time {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
}

.custom-row > .score {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}

.submission-table >> .row {
  width: 100%;
}

.custom-row > .id {
  font-size: 1.2rem;
}
</style>
