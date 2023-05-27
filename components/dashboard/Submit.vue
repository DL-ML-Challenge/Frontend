<template>
  <div class="main-container">
    <div class="left-container">
      <div class="header-container">
        SUBMIT
      </div>
      <div class="text-uppercase main-text">
        Submit Your Answers for each phase and Track your earlier submissions
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Submit'
}
</script>

<style scoped>
.main-container {
  background-image: url("~/assets/backgrounds/Submit.png");
  width: 100%;
  height: 100%;
  padding: 2% 2% 2% 4%;
  border-radius: 13px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.left-container {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.header-container {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #998C91;
  letter-spacing: 0.5rem;
}

.main-text {
  width: 75%;
  font-family: 'Avenir Next LT Pro', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  letter-spacing: 0.4rem;
  color: #998C91;
}
</style>
