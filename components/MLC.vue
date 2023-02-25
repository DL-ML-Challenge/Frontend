<template>
  <div class="mlc main-container">
    <div class="text-container">
      MACHINE
    </div>
    <div class="text-container learning">
      LEARNING
    </div>
    <div class="text-container contest">
      CONTEST
    </div>
    <div class="description-container">
      TEST YOUR
      <div class="ml">
        <div class="ml-container">
          <div class="ml-text">
            ML
          </div>
          <div class="triangle">
            &#9650;
          </div>
        </div>
      </div>
      SKILLS
    </div>
    <b-button variant="outline-secondary" class="button" @click.prevent="login">
      LOGIN
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'MLC',
  methods: {
    login () {
      this.$emit('goToLogin')
    }
  }
}
</script>

<style scoped>
.mlc.main-container {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/backgrounds/MLC.svg#svgView(preserveAspectRatio(none))");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-left: 5%;
  padding-top: 8%;
  padding-right: 50%;
}

.mlc .text-container {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: 1.2rem;
  line-height: 106%;
}

.mlc .text-container.learning {
  letter-spacing: 0.72rem;
}

.mlc .text-container.contest {
  letter-spacing: 1.32rem;
}

.mlc .description-container {
  margin-top: 8%;
  line-height: 2rem;
  font-family: Inter, sans-serif;
  font-weight: 200;
  font-size: 2.25rem;
  letter-spacing: 0.2em;
}

.description-container > .ml {
  display: inline-block;
}

.description-container > .ml > .ml-container > .ml-text {
  font-style: italic;
  font-weight: 800;
}

.description-container > .ml > .ml-container > .triangle {
  margin-top: 0;
  font-size: 1.5rem;
}

.description-container > .ml > .ml-container {
  display: flex;
  flex-direction: column;
  row-gap: 0;
  align-items: center;
}

.mlc .button {
  margin-top: 7%;
  width: 80%;
  border-radius: 32px;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  border-color: black;
  letter-spacing: 0.2em;
  color: black;
}

.mlc .button:hover {
  background: black;
  color: white;
}

</style>
