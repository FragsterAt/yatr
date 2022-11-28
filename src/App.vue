<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

import ReloadPwa from './components/ReloadPWA.vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
// import TheLogo from './components/TheLogo.vue'
import RouletteField from './components/RouletteField.vue'

const data = ref(null)

function onChange(newData) {
  data.value = newData
}

const { t } = useI18n()

</script>

<template>
  <reload-pwa></reload-pwa>
  <the-header></the-header>

  <main>
    <roulette-field @change="onChange"/>
  </main>

  <section v-if="data" :class="data.color">{{t(data.side)}}&nbsp;{{t(data.limb)}} {{t(data.color)}}</section>
  <section v-else>{{ t('touch-to-start') }}</section>

  <the-footer></the-footer>

  <!-- <the-logo></the-logo> -->
</template>

<style lang="sass">

main
  flex-grow: 1
  overflow: hidden
  display: flex
  align-items: center
section
  text-align: center
  font-weight: bolder

</style>
