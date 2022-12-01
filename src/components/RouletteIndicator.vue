<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  angle: { type: Number, default: 0 },
  animationDuration: { type: Number, default: 1000 }
})
const emit = defineEmits(['beginEvent', 'endEvent'])

const animation = ref(null)

const fromAngle = ref(props.angle)
watch(() => props.angle, async () => {
  animation.value.beginElement()
})

function onBegin () {
  emit('beginEvent')
}
function onEnd () {
  fromAngle.value = props.angle
  emit('endEvent')
}

</script>

<template>
  <g>
    <path d="M -10 0
      C -10 -10, -2 -90, 0 -90
      S 10 -14, 10 0
      S -10 14, -10 0" fill="#552200" :transform="`rotate(${fromAngle})`">

      <animateTransform ref="animation" attributeName="transform" attributeType="XML" type="rotate" begin="beginEvent"
        @beginEvent="onBegin" @endEvent="onEnd"
        :dur="`${animationDuration}ms`"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.25 1 0.5 1"
        fill="freeze" repeatCount="1" :from="fromAngle" :to="angle"
         />
    </path>
    <circle r="2"></circle>
  </g>
</template>

<style lang="sass">
</style>
