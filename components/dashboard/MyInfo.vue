<template>
  <div class="main-container">
    <div class="header">
      MY INFO
    </div>
    <div class="data-container">
      <div class="username-container">
        <div>USERNAME:</div>
        <div>{{ username }}</div>
      </div>
      <div class="team-container">
        <div>TEAM NAME:</div>
        <div>{{ teamName }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyInfo',
  computed: {
    username () {
      return this.$store.state.userData.username
    },
    teamName () {
      return this.$store.state.userData.teamName
    }
  }
}
</script>

<style scoped>
.main-container {
  background-image: url("~/assets/backgrounds/MyInfo.png");
  width: 100%;
  height: 100%;
  padding: 2% 2% 2% 4%;
  border-radius: 13px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.header {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.4rem;
  color: #A38B72;
}

.username-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.data-container {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  color: #A38B72;
}

</style>
