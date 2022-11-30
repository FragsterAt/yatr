<template>
  <div v-if="show" id="pwa" role="alert">
    <div>
      <span v-if="offlineReady">{{ t('app-ready') }}</span>
      <span v-else>{{ t('need-reload') }}</span>
    </div>
    <div>
      <button v-if="needRefresh" @click="updateServiceWorker()" class="button">
        {{ t('buttons.reload') }}
      </button>
      <button @click="close" class="button">
        {{ t('buttons.close') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  app-ready: "App ready to work offline"
  need-reload: "New content available, click on reload button to update."
  buttons:
    close: "Close"
    reload: "Reload"
ru:
  ready: "Приложение готово для работы оффлайн"
  need-reload: "Доступно обновление, нажми 'перезагрузить' чтобы применить."
  buttons:
    close: "Закрыть"
    reload: "Перезагрузить"
</i18n>

<script setup>
import { useRegisterSW } from "virtual:pwa-register/vue"
import { nextTick, computed, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const show = computed(() => offlineReady.value || needRefresh.value)
watch(show, async () => {
  await nextTick() // ждем обновления DOM
  window.dispatchEvent(new Event('resize')) // чтобы пересчитался размер рулетки
})
async function close () {
  offlineReady.value = false
  needRefresh.value = false
}

</script>

<style lang="sass">
#pwa
  display: flex
  gap: 1rem
  padding: 0.25rem
  margin: 0.25rem
  background-color: #80FF80
  border-radius: 0.25rem
  justify-content: space-between
  div:last-child
    display: flex
    gap: 0.25rem


</style>
