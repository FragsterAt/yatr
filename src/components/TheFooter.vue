<script setup>
import { useI18n } from 'vue-i18n';

const {locale} = useI18n()
function setLocale(l) {
  locale.value = l
}
</script>

<!-- https://emojipedia.org/flags/ -->
<template>
  <footer>
    <button @click="setLocale('ru')">π·πΊ</button>
    <div>&copy; 2022 Fragster</div>
    <button @click="setLocale('en')">πΊπΈ</button>
  </footer>
</template>

<style lang="sass">
footer
  display: flex
  justify-content: space-between
  button
    line-height: 1rem
    margin-top: -2rem
    font-size: 3rem
    border: none
    background: none
    cursor: pointer
</style>
