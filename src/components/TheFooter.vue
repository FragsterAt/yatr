<script setup>
import { useI18n } from 'vue-i18n';

const {locale} = useI18n()
function setLocale(l) {
  locale.value = l
}
</script>

<template>
  <footer>
    <button @click="setLocale('ru')">🇷🇺</button>
    <div>&copy; 2022 Fragster</div>
    <button @click="setLocale('en')">🇺🇸</button>
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
