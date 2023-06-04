<template>
  <div class="page-container">
    <b-row>
      <b-col class="text-center">
        <b-row>
          <b-col class="header-text">
            RANK
          </b-col>
        </b-row>
        <b-row v-for="(_, i) in ranking" :key="i" class="custom-row">
          <b-col>
            <b-row>
              <b-col :style="{color: getColor(i)}" class="rank-number">
                {{ i + 1 }}
              </b-col>
              <b-col v-if="i < 3" class="pl-0">
                <Dot :color="getColor(i)" class="dot" />
              </b-col>
              <b-col v-else />
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="11">
        <b-row>
          <b-col class="text-left header-text">
            TEAM NAME
          </b-col>
          <b-col class="text-right header-text">
            SCORE
          </b-col>
        </b-row>
        <b-row v-for="(rank, i) in ranking" :key="i" class="main-row custom-row">
          <b-col class="text-left">
            {{ rank.name }}
          </b-col>
          <b-col class="text-right">
            {{ rank.best_score | roundScore }}
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import Dot from '../Dot.vue'

export default {
  name: 'RankingTable',
  components: { Dot },
  filters: {
    roundScore (score) {
      return Math.round(score * 100) / 100
    }
  },
  props: [
    'challengeName',
    'phase'
  ],
  data () {
    return {
      ranking: []
    }
  },
  watch: {
    challengeName (n, o) {
      this.fetchRanking(n, this.phase)
    },
    phase (n, o) {
      this.fetchRanking(this.challengeName, o)
    }
  },
  mounted () {
    this.fetchRanking(this.challengeName, this.phase)
  },
  methods: {
    fetchRanking (challengeName, phase) {
      this.$axios.get(
        '/' + challengeName + '/' + phase + '/ranking/',
        {
          headers: {
            Authorization: this.$store.state.token.token
          }
        }
      ).then((response) => {
        this.ranking = response.data.results
      })
    },
    getColor (rank) {
      if (rank === 0) {
        return '#FCFF75'
      } else if (rank === 1) {
        return '#828282'
      } else if (rank === 2) {
        return '#EA7000'
      } else {
        return '#D9D9D9'
      }
    }
  }
}
</script>

<style scoped>
.page-container {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page-container > .row {
  width: 100%;
}

.header-text {
  font-family: "Avenir Next LT Pro", sans-serif;
  color: white;
  font-weight: 300;
  font-size: 1rem;
}

.custom-row {
  height: 3rem;
  padding-top: 0.6rem;
  padding-left: 1rem;
  margin-top: 1rem;

  font-family: "Avenir Next LT Pro", sans-serif;
}

.main-row {
  background: #D9D9D9;
  border-radius: 12px;
}

.dot {
  width: 0.7rem;
  height: 0.7rem;
  margin-top: 0.5rem;
}

.rank-number {
  font-size: 1.2rem;
}
</style>
