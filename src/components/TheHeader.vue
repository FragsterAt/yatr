
<template>
  <header>
    <div>
      <div>{{t('title.0')}}</div>&nbsp;<div>{{t('title.1')}}</div>
    </div>
    <div>
      <div>{{t('title.2')}}</div><div>{{t('title.3')}}</div>
    </div>
  </header>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style lang="sass">
header
  font-size: 2rem
  display: flex
  justify-content: center
  flex-wrap: wrap
  > div
    display: flex
    color: unset
    > div::first-letter
      font-weight: bold
      color: inherit
  > div:nth-of-type(1)
    > div:nth-of-type(1)::first-letter
      color: var(--color-red)
    > div:nth-of-type(2)::first-letter
      color: var(--color-yellow)
  > div:nth-of-type(2)
    > div:nth-of-type(1)::first-letter
      color: var(--color-green)
    > div:nth-of-type(2)::first-letter
      color: var(--color-blue)
</style>
