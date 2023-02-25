<template>
  <div class="whatisit main-container">
    <div class="text-container">
      <div class="wii-text-header">
        WHAT IS IT?
      </div>
      <div class="wii-text-body text-uppercase">
        MLC is a event held by university of Sharif (SUT) teaching assistants of AI course.
        in this event we learn about some of the deeper aspects of AI and challenge our knowledge in them in a contest.
        the winner will have some extra points in AI course and there might be some other prizes too!
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhatIsIt'
}
</script>

<style scoped>
.whatisit.main-container {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/backgrounds/WhatIsIt.svg#svgView(preserveAspectRatio(none))");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.whatisit .text-container {
  width: 100%;
  height: 100%;
  padding: 10% 50% 0 5%;
  color: black;
}

.whatisit .wii-text-header {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  margin-bottom: 3%;
  font-weight: 700;
}

.whatisit .wii-text-body {
  font-family: Inter, sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 300;
}

</style>
