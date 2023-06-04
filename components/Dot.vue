<template>
  <span class="dot" :style="{'background-color': computedColor}" />
</template>

<script>
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'DotComponent',
  props: ['color'],
  computed: {
    computedColor () {
      return this.color || '#bbb'
    }
  }
}
</script>

<style scoped>
.dot {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: inline-block;
}
</style>
