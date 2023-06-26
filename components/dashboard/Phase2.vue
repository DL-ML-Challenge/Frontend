<template>
  <div class="main-container">
    <div class="header mt-3">
      <div class="d-flex flex-row">
        <span class="mr-3">PHASE</span>
        <span class="font-weight-bold">
          TWO
        </span>
      </div>
      <p class="text-uppercase">
        This Phase contains Contents On NLP and Vision
      </p>
    </div>
    <div class="d-flex flex-row mt-2 p-2 h-50">
      <b-card class="mr-2 box-container nlp" no-body>
        <b-card-body>
          <p class="topic mb-0">
            FIRST TOPIC
          </p>
          <p class="topic-name">
            NLP
          </p>
        </b-card-body>
      </b-card>
      <b-card class="box-container vision mr-2" no-body>
        <b-card-body>
          <p class="topic mb-0">
            SECOND TOPIC
          </p>
          <p class="topic-name">
            VISION
          </p>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Phase1'
}
</script>

<style scoped>
.main-container {
  background-image: url("~/assets/backgrounds/Phase1.png");
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
  font-weight: 400;
  letter-spacing: 0.4rem;
  width: 75%;
}

.header > p {
  font-size: 1.25rem;
  font-weight: 300;
  width: 75%;
}

.box-container {
  width: 25%;
  height: 80%;
  border-radius: 13px;
  color: #BBC3E0;
}

.box-container.nlp {
  background: #420D74;
}

.box-container.vision {
  background: #06004F;
}

.box-container .card-body {
  padding: 1rem 0.5rem 0 0.5rem;
}

.topic {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 1rem;
  white-space: nowrap;
  font-weight: 400;
}

.topic-name {
  font-size: 1.5rem;
  white-space: nowrap;
  letter-spacing: 0.2rem;
  margin-top: 0.5rem;
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 700;
}
</style>
