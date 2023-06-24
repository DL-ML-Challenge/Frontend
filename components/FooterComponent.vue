<template>
  <div class="main">
    <div class="logo-container">
      <img src="~/assets/ext-logo/hpc.png" class="hpc">
      <img src="~/assets/ext-logo/sharif.png" class="sharif">
      <img src="~/assets/ext-logo/yektanet.png" class="yektanet">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.main {
  font-family: "Avenir Next LT Pro", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #EAEAEA;
  width: 100vw;
  height: 6%;
  display: flex;
  flex-direction: row;
  padding: 10px 10%;
}

.logo-container {
  width: 80%;
  display: flex;
  column-gap: 2%;
  justify-content: center;
  margin: 0 auto;
}
</style>
