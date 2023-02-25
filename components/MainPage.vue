<template>
  <div class="main-container">
    <div class="header">
      <nav class="nav m-auto">
        <ul class="nav-list">
          <li
            v-for="(section, index) in sections"
            :key="index"
            :class="{ active: currentSectionIndex === index }"
            @click="scrollTo(section.ref)"
          >
            {{ section.name }}
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-container">
      <div ref="section1" class="section">
        <MLC />
      </div>
      <div ref="section2" class="section">
        <WhatIsIt />
      </div>
      <div ref="section3" class="section">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/Login'
import MLC from '~/components/MLC'
import WhatIsIt from '~/components/WhatIsIt'

export default {
  name: 'MainPage',
  components: { WhatIsIt, MLC, Login },
  data () {
    return {
      sections: [
        { name: 'Section 1', display: 'MlC', ref: null },
        { name: 'Section 2', display: 'WHAT IS IT', ref: null },
        { name: 'Section 3', ref: null }
      ],
      currentSectionIndex: 0
    }
  },
  mounted () {
    this.sections.forEach((section) => {
      section.ref = this.$refs[section.name.replace(' ', '').toLowerCase()]
    })

    const pageContainer = this.$el.querySelector('.page-container')

    pageContainer.addEventListener('scroll', this.handleScroll)
    document.addEventListener('wheel', this.handleWheel)
  },
  unmounted () {
    document.removeEventListener('wheel', this.handleWheel)
  },
  methods: {
    handleWheel (e) {
      const delta = e.deltaY

      let nextIndex = this.currentSectionIndex
      if (delta > 0 && this.currentSectionIndex !== this.sections.length - 1) {
        nextIndex = this.currentSectionIndex + 1
      } else if (delta < 0 && this.currentSectionIndex !== 0) {
        nextIndex = this.currentSectionIndex - 1
      }
      if (nextIndex !== this.currentSectionIndex) {
        this.scrollTo(this.sections[nextIndex].ref)
      }
    },
    handleScroll () {
      const pageContainer = this.$el.querySelector('.page-container')
      const header = this.$el.querySelector('.header')

      const scrollTop = pageContainer.scrollTop
      const headerBottom = header.offsetHeight
      this.sections.forEach((section, i) => {
        const sectionTop = section.ref.offsetTop - headerBottom
        const sectionBottom = sectionTop + section.ref.offsetHeight

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          this.currentSectionIndex = i
        }
      })
    },
    scrollTo (ref) {
      ref.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.header {
  height: 10%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.main-container {
  height: 100vh;
  /*background-color: black;*/
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 5%;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin-right: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.nav-list li.active {
  color: red;
}

.page-container {
  position: relative;
  height: 90%;
  overflow-y: scroll;
}

.section {
  height: 100%;
}
</style>
