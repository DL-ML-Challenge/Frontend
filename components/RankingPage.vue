<template>
  <div class="main-page main-container">
    <div class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="item">
            <div class="item-name">
              <div class="mlc-logo">
                <MLCLogo />
              </div>
            </div>
          </li>
          <li class="item ml-auto">
            <div class="item-name logout" @click.prevent="logout()">
              Logout
            </div>
            <div />
          </li>
          <li class="item">
            <div class="item-name hover-pointer" @click.prevent="$router.push('/dashboard')">
              Dashboard
            </div>
            <div class="main-page dot">
              <Dot />
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-container">
      <div class="mt-4">
        <RankingList />
      </div>
    </div>
  </div>
</template>

<script>

import MLCLogo from './MLCLogo.vue'
import Dot from './Dot.vue'
import RankingList from './ranking/RankingList.vue'

export default {
  name: 'RankingPage',
  components: { RankingList, Dot, MLCLogo }
}
</script>

<style scoped>
.header {
  font-family: "Inter", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: 2px;
  height: 10vh;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  color: white;
}

.main-page.main-container {
  min-height: 100vh;
  background-color: black;
  padding: 0 10% 6.7% 10%;
}

.nav {
  padding: 0 5%;
  width: 100%;
  height: 100%;
}

.nav-list {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  list-style: none;
  padding: 0;
}

.nav-list li {
  margin-right: 20px;
}

.header .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}

.item-name > .mlc-logo {
  width: 2.5rem;
}

.main-page.dot {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 0.5rem;
  height: 0.5rem;
}

.hover-pointer:hover {
  cursor: pointer;
}

.item-name.logout {
  color: #FF9999;
}

.item-name.logout:hover {
  cursor: pointer;
}
</style>
