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
              <b-col />
              <b-col class="text-left">
                TIME
              </b-col>
              <b-col class="text-center">
                SCORE
              </b-col>
              <b-col class="text-right">
                DOWNLOAD
              </b-col>
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
  data () {
    return {
      submissions: []
    }
  },
  beforeMount () {
    this.$axios.get('')
  }
}
</script>

<style scoped>
.line {
  position: relative;
  padding: 0.3rem;
  height: 100%;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.line.last {
  padding-left: 2%;
  padding-right: 2%;
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
}

.submission-table > .first-row {
  font-size: 1rem;
  color: white;
  font-weight: 300;
}
</style>
