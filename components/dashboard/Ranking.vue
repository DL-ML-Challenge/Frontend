<template>
  <div class="main-container">
    <div class="header">
      <span>RANKING</span>
      <p class="text-uppercase">
        the Overall ranking of each phase
      </p>
    </div>
    <b-card-group deck class="w-75 mt-3">
      <b-card no-body class="phase-card">
        <b-card-body class="position-relative pb-0 phase1 phase-body" @click.prevent="goToRanking()">
          <div class="phase-text">
            <span>Phase</span>
            <span class="font-weight-bold">One</span>
          </div>
          <div class="line-container">
            <div class="line black" />
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body class="phase-card">
        <b-card-body class="position-relative pb-0 phase2 phase-body">
          <div class="phase-text">
            <span>Phase</span>
            <span class="font-weight-bold">Two</span>
          </div>
          <div class="line-container">
            <div class="line white" />
            <div class="line white" />
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body class="phase-card">
        <b-card-body class="position-relative pb-0 phase3 phase-body">
          <div class="phase-text">
            <span>Phase</span>
            <span class="font-weight-bold">Three</span>
          </div>
          <div class="line-container">
            <div class="line black" />
            <div class="line black" />
            <div class="line black" />
          </div>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ranking',
  methods: {
    goToRanking () {
      this.$router.push('/ranking')
    }
  }
}
</script>

<style scoped>
.main-container {
  background-image: url("~/assets/backgrounds/Ranking.png");
  width: 100%;
  height: 100%;
  padding: 4% 2% 2% 5%;
  border-radius: 13px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.header > span {
  color: #F4E779;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.4rem;
}

.header > p {
  width: 60%;
  color: #F4E779;
  font-size: 1.25rem;
  letter-spacing: 0.4rem;
}

.phase-text {
  font-family: "Avenir Next LT Pro", sans-serif;

  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
}

.line-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
}

.line {
  width: 7px;
  height: 29px;
}

.line.black {
  background: #000000;
}

.line.white {
  background: #FFFFFF;
}

.phase-card {
  border: 0;
  border-radius: 13px;
}

.phase1 {
  background: #F4E779;
}

.phase2 {
  background: #2F78B7;
}

.phase2 > .phase-text > span {
  color: white;
}

.phase3 {
  background: #9D9D9D;
}

.phase-body {
  border-radius: 13px;
}

.phase1.phase-body:hover {
  cursor: pointer;
}
</style>
