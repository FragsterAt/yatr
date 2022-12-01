<script setup>
import RouletteFieldSector from './RouletteFieldSector.vue'
import RouletteIndicator from './RouletteIndicator.vue'


const sectors = ['red', 'yellow', 'green', 'blue']

const activeSector = 0

const angle = 60

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"
    viewBox="-110 -110 220 220" id="logo" preserveAspectRatio="xMinYMin slice" ref="svg"
    width="1024"
    height="1024">
    <roulette-field-sector v-for="(sector, i) in sectors" :key="sector.color" :sectorNumber="i"
      :active="i === activeSector" :color="sector"  :sectorCount="4" :r="80" :width="30" :active-width="40"/>
    <roulette-indicator :angle="angle" />
  </svg>
</template>

<style lang="sass">

</style>
