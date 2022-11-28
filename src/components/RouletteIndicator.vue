<script setup>
import { watch, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  angle: { type: Number, default: 0 },
  animationDuration: { type: Number, default: 1000}
})

const animation = ref(null)

const oldAngle = ref(props.angle)
watch(()=>props.angle, () => {
  animation.value.beginElement()
})
function onEndEvent() {
  oldAngle.value = props.angle
}
onMounted(()=>animation.value.addEventListener("endEvent", onEndEvent))
onBeforeUnmount(()=>animation.value.removeEventListener("endEvent", onEndEvent))
</script>

<template>
  <g>
    <path d="M -10 0
      C -10 -10, -2 -90, 0 -90
      S 10 -14, 10 0
      S -10 14, -10 0"
      fill="#552200"
      :transform="`rotate(${angle})`">
    <animateTransform ref="animation"
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      begin="beginEvent"
      :from="oldAngle"
      :to="angle"
      :dur="`${animationDuration}ms`"
      calcMode="spline"
      keySplines="0.25, 1, 0.5, 1"
      fill="freeze"
      repeatCount="i" />
    </path>
    <circle r="2"></circle>
  </g>
</template>

<style lang="sass">
path
  transition-duration: 1s
  transition-property: transform
</style>
