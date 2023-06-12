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
            <template v-if="loading">
              <b-skeleton v-for="i in 3" :key="i" class="custom-row" height="3rem" />
            </template>
            <b-row v-for="(submission, i) in submissions" v-else :key="i" class="custom-row custom-row-table">
              <b-col cols="1" class="text-center id">
                {{ i + 1 }}
              </b-col>
              <b-col class="text-left time ml-2">
                {{ submission.created_at | verboseDate }}
              </b-col>
              <b-col class="text-center score">
                <span v-if="isSubmissionJudged(submission) && !isErrored(submission)">{{ submission.score | roundScore }}</span>
                <template v-else-if="isErrored(submission)">
                  <span :id="`popover-error-${i}`">ERROR</span>
                  <b-popover :target="`popover-error-${i}`" triggers="hover">
                    <p class="error-message">{{ submission.error }}</p>
                  </b-popover>
                </template>
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
      const minutes = Math.trunc((diff % (60 * 60)) / 60)
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
      submissions: [],
      loading: false
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
    isSubmissionJudged (submission) {
      return submission.is_judged
    },
    isErrored (submission) {
      return Boolean(submission.error)
    },
    fetchSubmissions (challengeName, phase) {
      this.loading = true
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
        }).finally(() => {
          this.loading = false
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
  margin-top: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 12px;
}

.submission-table > .custom-row-table {
  background: #D9D9D9;
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

.error-message {
  font-family: "Avenir Next LT Pro", sans-serif;
  white-space: pre-wrap;
}
</style>
