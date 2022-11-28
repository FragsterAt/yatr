
<template>
  <header>
    <div>Yet</div>&nbsp;<div>Another</div>
    <div>Twister</div>&nbsp;<div>Roulette</div>
  </header>
</template>

<style lang="sass">
header
  font-size: 2rem
  div
    display: inline-block
    color: unset
  div::first-letter
    font-weight: bold
    color: inherit
  div:nth-of-type(1)::first-letter
    color: var(--color-red)
  div:nth-of-type(2)::first-letter
    color: var(--color-yellow)
  div:nth-of-type(3)::first-letter
    color: var(--color-green)
  div:nth-of-type(4)::first-letter
    color: var(--color-blue)
</style>
