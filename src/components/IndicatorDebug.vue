<script setup>
import { ref } from 'vue';
import RouletteIndicator from './RouletteIndicator.vue'


const angle = ref(0)

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"
    viewBox="-110 -110 220 220" id="logo" preserveAspectRatio="xMinYMin slice" ref="svg"
    width="256"
    height="256">
    <roulette-indicator :angle="angle"  @click="angle+=360" :animationDuration="250"/>
  </svg>
</template>

<style lang="sass">

</style>
