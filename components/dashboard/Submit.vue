<template>
  <div class="main-container">
    <div class="dotted-container">
      <div class="left-container">
        <div class="header-container">
          SUBMIT
        </div>
        <div class="plus">
          <div class="up" />
          <div class="right" />
        </div>
      </div>
      <div class="image-container">
        <div class="leonardo-image" />
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
  background: linear-gradient(180deg, #08111E 0%, #081120 16.67%, #050D1A 40.63%, #020814 61.46%, #010912 81.77%, #00040D 100%);
  width: 100%;
  height: 100%;
  padding: 2%;
  border-radius: 13px;
}

.dotted-container {
  border: 2px dashed #998C91;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

.image-container {
  width: 50%;
  height: 100%;
}

.leonardo-image {
  background-image: url("~/assets/backgrounds/Submit.png");
  width: 100%;
  height: 100%;
}

.plus {
  position: relative;
  height: 35%;
  margin: auto;
}

.plus > .up {
  position: relative;
  top: 0;
  background: #077DAE;
  border-radius: 100px;
  width: 9px;
  height: 100%;
}

.plus > .right {
  width: 9px;
  height: 100%;
  top: 0;
  position: absolute;
  background: #077DAE;
  border-radius: 100px;
  transform: rotate(-90deg);
}
</style>
