<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n'
import RouletteFieldSector from './RouletteFieldSector.vue'
import RouletteIndicator from './RouletteIndicator.vue'

const { t } = useI18n({
  sharedMessages: {
    ru: { hand: 'рука', foot: 'нога', left: 'Левая', right: 'Правая'}
  }
})

const svg = ref(null)
const style = ref({
  height: 0,
  width: 0
})
function calcSize () {
  const parent = svg.value.parentElement
  const size = Math.min(parent.clientHeight, parent.clientWidth)
  style.value = { height: `${size}px`, width: `${size}px` }
}
onMounted(() => {
  window.addEventListener("resize", calcSize)
  calcSize()
})
onBeforeUnmount(() => window.removeEventListener("resize", calcSize))

const colors = ['red', 'yellow', 'green', 'blue']
const sides = ['right', 'left']
const limbs = ['hand', 'foot']

const sectors = []
const limbSectors = []
for (let side of sides) {
  for (let limb of limbs) {
    limbSectors.push({side, limb})
    for (let color of colors) {
      sectors.push({ side, limb, color })
    }
  }
  limbs.reverse()
}
const activeSector = ref(null)

const angle = ref(0)
let direction = 1
let maxAngle = 360 * 10
let startTime = performance.now();
let startAngle = 0;
let deltaAngle = 0
const animationDuration = 1000
let animationActive = false

function rotateRoulette () {
  if (animationActive) return;
  animationActive = true;
  startAngle = angle.value
  startTime = performance.now();
  deltaAngle = Math.random() * maxAngle;
  angle.value += deltaAngle
  direction = -direction
  requestAnimationFrame(updateActiveSector)
}

// https://easings.net/#easeOutQuart
function easeOutQuart (x) {
  return 1 - Math.pow(1 - x, 4);
}

const emit = defineEmits(['change'])

function updateActiveSector () {
  const duration = Math.min((performance.now() - startTime) / animationDuration, 1);
  const currentAngle = startAngle + deltaAngle * easeOutQuart(duration)

  activeSector.value = Math.floor((currentAngle % 360) / (360 / 16))

  if (duration < 1) {
    requestAnimationFrame(updateActiveSector)
  } else {
    animationActive = false;
    emit('change', sectors[activeSector.value])
  }
}

function getImageUrl(name) {
  return new URL(`../assets/icons/${name}.svg`, import.meta.url).href
}

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img"
    viewBox="-110 -110 220 220" id="roulette" preserveAspectRatio="xMinYMin slice" ref="svg" :style="style"
    @click="rotateRoulette">
    <line x1="-110" x2="110" stroke-width="0.2" stroke="grey" stroke-dasharray="4"></line>
    <line y1="-110" y2="110" stroke-width="0.2" stroke="grey" stroke-dasharray="4"></line>
    <g v-for="(limbSector, i) in limbSectors" :key="i"
      :transform="`rotate(${90*i + 45})
      translate(0, -60)
      rotate(-${90*i + 45})
      translate(0, 5)
      `">
      <image :href="getImageUrl(limbSector.limb)" x="-12" y="-24" height="24" width="24"
        :transform="`scale(${i <2 ? -1 : 1} ,1)`"/>
      <text x="0" y="8" text-anchor="middle" font-size="8">{{t(limbSector.side)}}</text>
      <text x="0" y="16" text-anchor="middle" font-size="8">{{t(limbSector.limb)}}</text>
    </g>
    <roulette-field-sector v-for="(sector, i) in sectors" :key="sector.color" :sectorNumber="i"
      :active="i === activeSector" :color="sector.color" @click="sector.active = !sector.active" />
    <roulette-indicator :angle="angle" :animation-duration="animationDuration"/>
  </svg>
</template>

<style lang="sass">
#roulette
  width: 10px
  height: 10px
  margin: 0 auto
  display: block
  user-select: none

</style>
