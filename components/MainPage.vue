<template>
  <div class="main-page main-container">
    <div class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li
            v-for="(section, index) in sections"
            :key="index"
            :class="{ item: true, 'ml-auto': index === 2}"
            @click="scrollTo(section.ref)"
          >
            <div class="item-name">
              <div v-if="index === 0" class="mlc-logo">
                <MLCLogo />
              </div>
              <div v-else>
                {{ section.display }}
              </div>
            </div>
            <div class="item-isactive">
              <div v-if="currentSectionIndex === index" class="main-page dot">
                <Dot />
              </div>
              <div v-else />
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="page-container">
      <div ref="section1" class="section">
        <MLC @goToLogin="scrollTo(sections[2].ref)" />
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
import MLCLogo from '~/components/MLCLogo'
import Dot from '~/components/Dot'

export default {
  name: 'MainPage',
  components: { Dot, MLCLogo, WhatIsIt, MLC, Login },
  data () {
    return {
      sections: [
        { name: 'section1', display: 'Salam', ref: null },
        { name: 'section2', display: 'WHAT IS IT?', ref: null },
        { name: 'section3', display: 'LOGIN', ref: null }
      ],
      currentSectionIndex: 0
    }
  },
  mounted () {
    this.sections.forEach((section) => {
      section.ref = this.$refs[section.name]
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
  font-family: "Inter", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  letter-spacing: 2px;
  height: 10%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  color: white;
}

.main-page.main-container {
  height: 100vh;
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
  cursor: pointer;
}

.page-container {
  position: relative;
  height: 90%;
  overflow-y: scroll;
  border-radius: 32px;
}

.section {
  height: 100%;
  margin-bottom: 5rem;
}

.main-page.dot {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 0.5rem;
  height: 0.5rem;
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

</style>
