<script setup>
import { computed } from 'vue'

const props = defineProps({
  sectorNumber: Number,
  sectorCount: { type: Number, default: 16 },
  r: { type: Number, default: 100 },
  active: { type: Boolean, default: false },
  color: { type: String, default: 'green' },
  width: { type: Number, default: 6},
  activeWidth: { type: Number, default: 10}
})

const path = computed(() => {
  const width = props.active ? props.activeWidth : props.width
  const angleGap = props.active ? 0 : 3 * Math.PI / 360
  const angleWidth = 2 * Math.PI / props.sectorCount
  const startAngle = angleWidth * props.sectorNumber + angleGap - Math.PI / 2
  const endAngle = angleWidth * (props.sectorNumber + 1) - angleGap - Math.PI / 2

  const rS = props.r - width / 2
  const rL = props.r + width / 2

  const x1 = Math.cos(startAngle) * rL
  const y1 = Math.sin(startAngle) * rL

  const x2 = Math.cos(endAngle) * rL
  const y2 = Math.sin(endAngle) * rL

  const x3 = Math.cos(endAngle) * rS
  const y3 = Math.sin(endAngle) * rS

  const x4 = Math.cos(startAngle) * rS
  const y4 = Math.sin(startAngle) * rS

  return `M ${x1} ${y1}
    A ${rL} ${rL} 0 0 1 ${x2} ${y2}
    L ${x3} ${y3}
    A ${rS} ${rS} 0 0 0 ${x4} ${y4}
    L ${x1} ${y1}`
})

const opacity = computed(() => props.active ? 1 : 0.5)

</script>

<template>
  <path :d="path" fill="currentColor" :class="color" :opacity="opacity"/>
</template>

<style lang="sass">
</style>
